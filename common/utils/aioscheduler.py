from apscheduler.events import EVENT_JOB_ERROR
from apscheduler.executors.asyncio import AsyncIOExecutor
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from loguru import logger


class AioScheduler(AsyncIOScheduler):
    @staticmethod
    def listener(event):
        if event.exception:
            err_info = f'Traceback (most recent call last):\r\n{event.traceback}\r\n{str(event.exception.__class__.__name__)}: {event.exception} '
            logger.error(err_info)

    async def connect(self, paused: bool = False):
        try:
            # jobstores = {
            #     'default': RedisJobStore(host=config.REDIS_URL)
            # }
            executors = {
                'default': AsyncIOExecutor()
            }
            job_defaults = {
                'coalesce': False,  # 是否合并执行
                'max_instances': 1,  # 最大实例数
                'misfire_grace_time': 10,  # 任务错过执行时间后，最大容错时间，过期后不再执行，单位：秒
                'replace_existing': True   # 如果存在则会更新任务
            }
            # super().configure(jobstores=jobstores, executors=executors, job_defaults=job_defaults)
            super().configure(executors=executors, job_defaults=job_defaults)
            super().add_listener(self.listener, mask=EVENT_JOB_ERROR)
            super().start(paused)
            logger.info('scheduler startup complete')
        except Exception as e:
            logger.error(f'scheduler startup error: {e}')

    async def close(self, wait: bool = False):
        try:
            super().shutdown(wait)
            logger.info('scheduler shutdown complete')
        except Exception as e:
            logger.error(f'scheduler shutdown error: {e}')


scheduler = AioScheduler()
