from contextlib import asynccontextmanager

from fastapi import FastAPI
from tortoise import Tortoise
from tortoise.contrib.fastapi import register_tortoise
from apps.common.config.base_config import settings


models = [
    'aerich.models',
    'apps.wechat.models.wechat',
    'apps.user.models.user'
]

mysql_config = {
    'connections': {
        'default': settings.MYSQL_URL,
    },
    'apps': {
        'default': {'models': models, 'default_connection': 'default'},
    },
    'use_tz': False,
    'timezone': 'Asia/Shanghai'
}

class AioMySQL:
    @classmethod
    async def connect(cls):
        await Tortoise.init(config=mysql_config)

    @classmethod
    async def close(cls):
        await Tortoise.close_connections()

    @classmethod
    async def register_mysql(cls, app: FastAPI):
        # 注册数据库，FastAPI用
        register_tortoise(
            app,
            config=mysql_config,
            generate_schemas=False,
            add_exception_handlers=settings.APP_DEBUG
        )

    @classmethod
    @asynccontextmanager
    async def excete(cls):
        await cls.connect()
        yield
        await cls.close()


