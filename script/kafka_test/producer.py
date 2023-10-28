import asyncio

from common.base_config import settings
from common.utils.aiokafka import AioKafkaProducer


async def main():
    producer = AioKafkaProducer(bootstrap_servers=settings.KAFKA_URL)
    result = await producer.send_msg(topic='test', value={'id': 1, 'b': 2, '3': 3})
    print(result)
    await producer.stop()



if __name__ == '__main__':
    asyncio.run(main())

# env PYTHONPATH=. python ./script/kafk_test/producer.py


