import asyncio
import json
import random
import time
import traceback
from functools import wraps
from typing import List, Optional
from aiokafka import AIOKafkaProducer, AIOKafkaConsumer, TopicPartition
from aiokafka.admin import AIOKafkaAdminClient
from kafka.admin import NewTopic
from kafka.partitioner import murmur2
from loguru import logger
from common.config.base_config import settings
from common.databases.redis import AioRedis
from common.utils.func import uuid_str

# 默认配置：初始化Topic定义，三个节点，2个副本，最大程度保证可靠（两个副本，只能挂一台机器）
topics_setting = {'num_partitions': 3, 'replication_factor': 2, 'topic_configs': {'min.insync.replicas': 1}}


async def do_init_topic(bootstrap_servers, topics):
    """
    初始化Topic函数
    """
    global topics_setting

    admin_client = AIOKafkaAdminClient(bootstrap_servers=bootstrap_servers)
    await admin_client.start()
    list_topics = await admin_client.list_topics()
    init_topic_set = {name for name in list_topics if not name.startswith('__')}

    topics_diff = set(topics).difference(init_topic_set)
    if not topics_diff:
        await admin_client.close()
        return

    init_topics = []
    for topic in topics_diff:
        tp = NewTopic(
            name=topic,
            num_partitions=topics_setting['num_partitions'],
            replication_factor=topics_setting['replication_factor'],
            topic_configs=topics_setting['topic_configs']
        )
        init_topics.append(tp)

    if init_topics:
        logger.info(f'需要新建的topics: {[tp.name for tp in init_topics]}')
        response = await admin_client.create_topics(init_topics)
        await admin_client.close()
        for topic, code, message in response.topic_errors:
            if code != 0:
                raise Exception('初始化创建topic失败')

        await asyncio.sleep(0.3)  # 等待元数据同步


def serializer(value):
    return json.dumps(value).encode('utf-8')


def deserializer(serialized):
    return json.loads(serialized.decode('utf-8'))


def key_serializer(key):
    if key is not None:
        str(key).encode('utf-8')
    return key


def key_deserializer(key):
    if key is not None:
        key.decode('utf-8')
    return key


class AioKafkaProducer(AIOKafkaProducer):
    def __init__(
            self,
            bootstrap_servers: str,
            enable_idempotence: bool = False,
            acks: int = 1
    ):
        self.bootstrap_servers = bootstrap_servers
        self.enable_idempotence = enable_idempotence
        self.acks = acks
        super().__init__(                           # 此处使用继承，每次发送创建一个producer，防止断连失效，后续可以考虑连接池
            bootstrap_servers=bootstrap_servers,    # IP + 端口
            key_serializer=key_serializer,
            value_serializer=serializer,
            enable_idempotence=enable_idempotence,  # 消息发送幂等性
            acks=acks,                              # 默认1，等待leader写入即可
            retry_backoff_ms=3000,                  # 发生错误重试间隔
            request_timeout_ms=6000,                # 发送消息超时时间
            partitioner=self.balanced_partitions    # 定义消息如何分区
        )

    @staticmethod
    def balanced_partitions(key: bytes, all_partitions: List, available_partitions: List):
        """
        指定存储的分区，通常使用ID即可
        注意：要保证顺序消费，请设置一样的key，如不设置，默认随机选取分区
        """
        if key is None:
            if available_partitions:
                return random.choice(available_partitions)
            return random.choice(all_partitions)

        if key.isalnum():
            if available_partitions:
                idx = int(key) % len(available_partitions)
                return available_partitions[idx]
            idx = int(key) % len(all_partitions)
            return all_partitions[idx]

        idx = murmur2(key)
        idx &= 0x7fffffff
        idx %= len(all_partitions)
        return all_partitions[idx]

    async def send_msg(self, topic, value=None, key: Optional[str] = None, partition: Optional[str] = None,
                       timestamp_ms=None, headers=None):
        """send不等待返回，获取future对象"""
        await super().start()
        result = await super().send(topic, value=value, key=key, partition=partition, timestamp_ms=timestamp_ms,
                                    headers=headers)
        logger.debug(f'---- kafka send: {topic} {value}')
        await super().stop()
        return result

    async def send_msg_and_wait(self, topic, value=None, key: Optional[str] = None, partition: Optional[str] = None,
                                timestamp_ms=None, headers=None):
        """send等待发送结果返回"""
        await self.start()
        result = await super().send_and_wait(topic, value=value, key=key, partition=partition,
                                             timestamp_ms=timestamp_ms, headers=headers)
        logger.debug(f'---- kafka send: {topic} {value}')
        await super().stop()
        return result


class AioKafkaConsumer(AIOKafkaConsumer):
    def __init__(
            self,
            bootstrap_servers: str,
            group_id: str = '0',  # 默认0分组
            auto_offset_reset: str = 'earliest',     # 如果丢失从头开始消费
            connections_max_idle_ms: Optional[int] = None  # 消费者空闲时间不关闭
    ):
        self.bootstrap_servers = bootstrap_servers
        self.group_id = group_id
        super().__init__(
            bootstrap_servers=bootstrap_servers,  # IP + 端口
            key_deserializer=key_deserializer,
            value_deserializer=deserializer,
            group_id=group_id,              # 手动commit必须分组。 分组消费，同组内均衡消费(点对点)，不同组各种订阅（发布订阅）
            enable_auto_commit=False,       # 取消自动commit
            auto_offset_reset=auto_offset_reset,
            retry_backoff_ms=3000,          # 发生错误重试间隔
            request_timeout_ms=9000,        # 消费连接超时时间
            connections_max_idle_ms=connections_max_idle_ms,
            metadata_max_age_ms=30000       # 30s刷新元数据，如果使用了通配符pattern，有新的topic加入，会在30s内加入消费者组
        )

    async def start_consumer(self, callback: callable, topics=(), pattern=None):
        """开始消费"""
        await self.start()
        self.subscribe(topics=topics, pattern=pattern)
        logger.info(f'开始消费: topics={topics} pattern={pattern}')

        times = 3  # 重试3次，失败后先跳过
        while not self._closed:
            tp = offset = None
            try:
                message = await self.getone()
                logger.debug(f'---- kafka consumed: {message.value}  topic: {message.topic}  offset: {message.offset}')
                tp = TopicPartition(message.topic, message.partition)
                offset = message.offset
                data = message.value
                await callback(data)
                await self.commit({tp: offset + 1})
            except Exception as e:
                if self._closed:
                    return

                logger.error(traceback.format_exc())
                if times > 0:
                    logger.error('发送错误，重试')
                    self.seek(tp, offset)
                    times -= 1
                else:
                    logger.error('重试失败')
                    await self.commit({tp: offset + 1})
                    times = 3

    async def stop_consumer(self):
        """停止消费"""
        await self.stop()


class AioKafkaTask:
    TOPIC = ''

    producer = None
    consumer = None

    @classmethod
    def check_params(cls):
        if not cls.TOPIC:
            raise Exception('请先在子类添加TOPIC参数')

    @staticmethod
    def async_task(func):
        """kafka异步执行任务"""
        @wraps(func)
        async def wrapper_func(cls, *args, **kwargs):
            cls.check_params()
            # 「消费者」或「某些业务」不需要再发送消息
            if kwargs.pop('__no_wrapper', None):
                return await func(cls, *args, **kwargs)

            data = {
                '__func_name': func.__name__,
                '__args': args,
                **kwargs
            }

            cls.producer = AioKafkaProducer(bootstrap_servers=settings.KAFKA_URL)
            result = await cls.producer.send_msg_and_wait(cls.TOPIC, data)
            return result

        return wrapper_func

    @classmethod
    async def start_task(cls):
        """开始消费"""
        async def task_func(kwargs):
            func_name = kwargs.pop('__func_name')
            args = kwargs.pop('__args')
            func = getattr(cls, func_name)
            await func(*args, **kwargs, __no_wrapper=True)

        cls.check_params()
        cls.consumer = AioKafkaConsumer(bootstrap_servers=settings.KAFKA_URL)
        await cls.consumer.start_consumer(callback=task_func, topics=[cls.TOPIC])

    @classmethod
    async def stop_task(cls):
        """停止消费"""
        if cls.consumer:
            await cls.consumer.stop_consumer()
