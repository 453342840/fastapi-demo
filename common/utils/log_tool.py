"""Configure handlers and formats for application loggers."""
import logging
import sys
from pprint import pformat

# if you dont like imports of private modules
# you can move it to typing.py module
from loguru import logger
from loguru._defaults import LOGURU_FORMAT

from common.base_config import settings


class InterceptHandler(logging.Handler):
    """
    Default handler from examples in loguru documentaion.
    See https://loguru.readthedocs.io/en/stable/overview.html#entirely-compatible-with-standard-logging
    """

    def emit(self, record: logging.LogRecord):
        # Get corresponding Loguru level if it exists
        try:
            level = logger.level(record.levelname).name
        except ValueError:
            level = record.levelno

        # Find caller from where originated the logged message
        frame, depth = logging.currentframe(), 2
        while frame.f_code.co_filename == logging.__file__:
            frame = frame.f_back
            depth += 1

        logger.opt(depth=depth, exception=record.exc_info).log(
            level, record.getMessage()
        )


def format_record(record: dict) -> str:
    """
    Custom format for loguru loggers.
    Uses pformat for log any data like request/response body during debug.
    Works with logging if loguru handler it.
    Example:
    >>> payload = [{"users":[{"name": "Nick", "age": 87, "is_active": True}, {"name": "Alex", "age": 27, "is_active": True}], "count": 2}]
    >>> logger.bind(payload=).debug("users payload")
    >>> [   {   'count': 2,
    >>>         'users': [   {'age': 87, 'is_active': True, 'name': 'Nick'},
    >>>                      {'age': 27, 'is_active': True, 'name': 'Alex'}]}]
    """

    # format_string = LOGURU_FORMAT
    format_string = "<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green> | <level>{level: <8}</level> |  <level>{message}</level>"
    if record["extra"].get("payload") is not None:
        record["extra"]["payload"] = pformat(
            record["extra"]["payload"], indent=4, compact=True, width=88
        )
        format_string += "\n<level>{extra[payload]}</level>"

    format_string += "{exception}\n"
    return format_string


def init_logging(filename):
    """
    Replaces logging handlers with a handler for using the custom handler.

    WARNING!
    if you call the init_logging in startup event function,
    then the first logs before the application start will be in the old format
    >>> app.add_event_handler("startup", init_logging)
    stdout:
    INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
    INFO:     Started reloader process [11528] using statreload
    INFO:     Started server process [6036]
    INFO:     Waiting for application startup.
    2020-07-25 02:19:21.357 | INFO     | uvicorn.lifespan.on:startup:34 - Application startup complete.

    """

    # disable handlers for specific uvicorn loggers
    # to redirect their output to the default uvicorn logger
    # works with uvicorn==0.11.6
    loggers = (
        logging.getLogger(name)
        for name in logging.root.manager.loggerDict
        if name.startswith("uvicorn.")
    )
    for uvicorn_logger in loggers:
        uvicorn_logger.handlers = []

    # change handler for default uvicorn logger
    intercept_handler = InterceptHandler()
    # logging.getLogger("uvicorn").handlers = [intercept_handler]
    logging.getLogger("uvicorn.access").handlers = [intercept_handler]
    logging.getLogger("uvicorn.error").handlers = [intercept_handler]

    # set logs output, level and format
    logger.configure(
        handlers=[{"sink": sys.stdout, "level": logging.DEBUG if settings.APP_DEBUG else logging.INFO, "format": format_record}]
    )

    # 默认为线程安全，但不是异步或多进程安全的，添加参数 enqueue=True
    logger.add(
        f'log/{filename}.log',
        rotation='1 week',
        encoding='utf-8',
        retention='30 days',
        enqueue=True,       # 要记录的消息在到达接收器之前是否应该首先通过多进程安全队列
        diagnose=False,     # 异常跟踪是否应该显示变量值以简化调试。在生产中，这应该设置为“False”，以避免泄漏敏感数据。
        backtrace=True,     # 格式化的异常跟踪是否应该向上扩展，超出捕获点，以显示生成错误的完整堆栈跟踪
        format=format_record,
        compression='zip'
    )