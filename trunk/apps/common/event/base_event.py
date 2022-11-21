from fastapi import FastAPI
from typing import Callable
from apps.common.databases.mysql import AioMySQL
from apps.common.databases.redis import AioRedis
from apps.common.utils.logger import init_logging


def startup(app: FastAPI, name: str) -> Callable:
    """
    FastAPI启动事件
    :param app:
    :return: app_start
    """

    async def app_start() -> None:
        # 注入MySQL
        await init_logging(name)
        await AioMySQL.register_mysql(app)
        await AioRedis.connect()

    return app_start

def shutdown(app: FastAPI) -> Callable:
    """
    FastAPI停止事件
    :param app:
    :return: app_stop
    """
    async def app_stop() -> None:
        await AioRedis.close()
    return app_stop