import pytest
from common.databases.mysql import AioMysql
from common.databases.redis import AioRedis


@pytest.fixture(scope='session')
def anyio_backend():
    return 'asyncio'


@pytest.fixture(scope='session', autouse=True)
async def initialize_tests():
    await AioMysql.connect()
    await AioRedis.connect()
    yield
    await AioMysql.close()
    await AioRedis.close()


# pytest -v --cov=.


