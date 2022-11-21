from contextlib import asynccontextmanager
from typing import Awaitable, Optional

import aioredis
from aioredis import Redis
from apps.common.config.base_config import settings

class AioRedis:
    HOURS: int = 3600
    MINUTE: int = 60


    _reds_pool: Redis = None

    @classmethod
    async def connect(cls) -> Redis:
        if not cls._reds_pool:
            pool = aioredis.ConnectionPool.from_url(
                settings.REDIS_URL,
                max_connections=10,
                encoding='utf-8',
                decode_responses=True
            )
            cls._reds_pool = Redis(connection_pool=pool)
        return cls._reds_pool

    @classmethod
    async def close(cls) -> None:
        await cls._reds_pool.close()

    @classmethod
    @asynccontextmanager
    async def excute(cls) -> None:
        await cls.connect()
        yield
        await cls.close()

    @classmethod
    async def delete(cls, *names) -> None:
        redis = await cls.connect()
        await redis.delete(*names)

    @classmethod
    async def get(cls, name) -> Optional[str]:
        redis = await cls.connect()
        result = await redis.get(name)
        return result

    @classmethod
    async def set(cls, name, value, ex=None, px=None, nx=None, xx=None) -> None:
        redis = await cls.connect()
        await redis.set(name, value, ex=ex, px=px, nx=nx, xx=xx)
