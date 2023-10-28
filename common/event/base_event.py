from fastapi import FastAPI
from typing import Callable, Optional
from common.databases.mysql import AioMysql
from common.databases.redis import AioRedis
from common.utils.aioscheduler import AioScheduler


def startup(app: FastAPI, scheduler: Optional[AioScheduler]) -> Callable:
    """
    FastAPI启动事件
    """

    async def app_start() -> None:
        await AioMysql.register_mysql(app)
        await AioRedis.connect()
        scheduler and await scheduler.connect()

    return app_start


def shutdown(app: FastAPI, scheduler: Optional[AioScheduler]) -> Callable:
    """
    FastAPI停止事件
    """
    async def app_stop() -> None:
        await AioMysql.close()
        await AioRedis.close()
        scheduler and await scheduler.close()

    return app_stop
