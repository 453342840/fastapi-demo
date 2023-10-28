import time
import asyncio
from contextlib import asynccontextmanager
from typing import Union, Mapping, Callable
from redis.commands.core import ResponseT
from redis import asyncio as aioredis
from redis.asyncio import Redis
from redis.typing import ZScoreBoundT, KeyT, EncodableT, ExpiryT, AnyKeyT

from common.base_config import settings
from common.const.redis_const import LOCK_API


class AioRedis:
    DAY: int = 86400
    HOURS: int = 3600
    MINUTE: int = 60

    _reds_pool: Redis = None

    @classmethod
    async def connect(cls) -> Redis:
        if not cls._reds_pool:
            pool = aioredis.ConnectionPool.from_url(
                settings.REDIS_URL,
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
    async def delete(cls, *names: KeyT) -> ResponseT:
        redis = await cls.connect()
        result = await redis.delete(*names)
        return result

    @classmethod
    async def get(cls, name: KeyT) -> ResponseT:
        redis = await cls.connect()
        result = await redis.get(name)
        return result

    @classmethod
    async def set(
            cls,
            name: KeyT,
            value: EncodableT,
            ex: Union[ExpiryT, None] = None,  # 超时秒数
            px: Union[ExpiryT, None] = None,  # 超时毫秒
            nx: bool = False,
            xx: bool = False
    ) -> ResponseT:
        redis = await cls.connect()
        result = await redis.set(name, value, ex=ex, px=px, nx=nx, xx=xx)
        return result

    @classmethod
    async def expire(cls, name: KeyT, expire) -> ResponseT:
        redis = await cls.connect()
        result = await redis.expire(name, expire)
        return result

    @classmethod
    async def decrby(cls, name: KeyT, amount=1) -> ResponseT:
        redis = await cls.connect()
        result = await redis.decrby(name, amount)
        return result

    @classmethod
    async def incrby(cls, name: KeyT, amount=1) -> ResponseT:
        redis = await cls.connect()
        result = await redis.incrby(name, amount)
        return result

    @classmethod
    async def zadd(
            cls,
            name: KeyT,
            mapping: Mapping[AnyKeyT, EncodableT],
            nx: bool = False,
            xx: bool = False,
            ch: bool = False,
            incr: bool = False,
            gt: bool = False,
            lt: bool = False
    ) -> ResponseT:
        redis = await cls.connect()
        result = await redis.zadd(name, mapping, nx, xx, ch, incr, gt, lt)
        return result

    @classmethod
    async def zrem(cls, name: KeyT, values) -> ResponseT:
        redis = await cls.connect()
        result = await redis.zrem(name, values)
        return result

    @classmethod
    async def zscore(
            cls,
            name: KeyT,
            value: EncodableT
    ) -> ResponseT:
        redis = await cls.connect()
        result = await redis.zscore(name, value)
        return result

    @classmethod
    async def zrevrangebyscore(
            cls,
            name: KeyT,
            max: ZScoreBoundT,
            min: ZScoreBoundT,
            start: Union[int, None] = None,
            num: Union[int, None] = None,
            withscores: bool = False,
            score_cast_func: Union[type, Callable] = float,
    ) -> ResponseT:
        redis = await cls.connect()
        result = await redis.zrevrangebyscore(name, max, min, start, num, withscores, score_cast_func)
        return result

    @classmethod
    async def zcard(cls, name: KeyT) -> int:
        redis = await cls.connect()
        result = await redis.zcard(name)
        return result

    @classmethod
    async def zremrangebyscore(
            cls,
            name: KeyT,
            min: ZScoreBoundT,
            max: ZScoreBoundT
    ) -> ResponseT:
        redis = await cls.connect()
        result = await redis.zremrangebyscore(name, min, max)
        return result

    @classmethod
    async def zcard(cls, name: KeyT) -> int:
        redis = await cls.connect()
        result = await redis.zcard(name)
        return result

    @classmethod
    @asynccontextmanager
    async def lock(
            cls,  # 分布式锁
            name: str,
            value: EncodableT = 1,
            timeout: int = 3000,  # 毫秒，等待锁的时间
            expire: int = 3000  # 毫秒，锁的有效期
    ) -> None:
        if isinstance(value, int):
            value = str(value)

        acquired = False
        timeout_at = int(time.time() * 1000) + timeout
        while int(time.time() * 1000) < timeout_at:
            result = await cls.set(name, value, nx=True, px=expire)
            if result:
                acquired = True
                break
            await asyncio.sleep(0.01)
        assert acquired

        yield acquired

        if value == await cls.get(name):
            await cls.delete(name)

    @classmethod
    async def pass_fix_window(cls, name, limit, expire):
        """限流：固定窗口"""
        async with cls.lock(LOCK_API.format(name=name)):
            count = await cls.get(name)
            if not count:
                await cls.set(name, 1, ex=expire)
                return True

            if int(count) < limit:
                await cls.incrby(name)
                return True

            return False

    @classmethod
    async def pass_slide_window(cls, name, limit, expire):
        """限流：滑动窗口"""
        async with cls.lock(LOCK_API.format(name=name)):
            count = await cls.zcard(name)
            if not count or count < limit:
                now_timestamp = int(time.time() * 1000)
                old_timestamp = now_timestamp - expire * 1000
                await cls.zadd(name, {str(now_timestamp): now_timestamp})
                await cls.zremrangebyscore(name, 0, old_timestamp)
                await cls.expire(name, expire)
                return True
            else:
                now_timestamp = int(time.time() * 1000)
                old_timestamp = now_timestamp - expire * 1000
                await cls.zremrangebyscore(name, 0, old_timestamp)

            return False
