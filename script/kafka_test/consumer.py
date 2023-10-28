import asyncio

from common.base_config import settings
from common.utils.aiokafka import AioKafkaConsumer


async def main():
    async def test(message):
        print(message)

    producer = AioKafkaConsumer(bootstrap_servers=settings.KAFKA_URL)
    xx = await producer.start_consumer(pattern='sss*', callback=test)
    print(xx)


if __name__ == '__main__':
    asyncio.run(main())

# env PYTHONPATH=. python ./script/kafk_test/consumer.py


