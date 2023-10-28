import asyncio
from common.utils.aiokafka import AioKafkaTask


class TestTask(AioKafkaTask):
    TOPIC = 'test_async_task'

    @classmethod
    @AioKafkaTask.async_task
    async def task1(cls, id, name):
        print(id, name)


async def main():

    # 生产者发送消息任务
    await TestTask.task1(id=1, name='小米')

    # 消费者异步消费任务
    await TestTask.start_task()
    await TestTask.stop_task()

if __name__ == '__main__':
    asyncio.run(main())

# env PYTHONPATH=. python ./script/kafk_test/async_task.py



