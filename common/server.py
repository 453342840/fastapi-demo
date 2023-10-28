import os.path

from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from starlette.staticfiles import StaticFiles
from common.event.base_event import startup, shutdown
from common.middleware.base_middleware import BaseMiddleware
from common.exception.base_exception import request_error_handler, http422_error_handler, RequestException
from common.utils.log_tool import init_logging


def start_fastapi(config, scheduler=None):
    # 初始化日志
    init_logging(config.APP_NAME)

    app = FastAPI(
        debug=config.APP_DEBUG,
        title=config.APP_TITLE,
        openapi_url=f'/docs/{config.APP_NAME}/openapi.json',
        docs_url=f'/docs/{config.APP_NAME}',
        redoc_url=f'/redoc/{config.APP_NAME}'
    )

    # 事件监听
    app.add_event_handler('startup', startup(app, scheduler))
    app.add_event_handler('shutdown', shutdown(app, scheduler))

    # 中间件(目前暂时使用session，如使用需分布式存储如redis存储，否则多服务器会导致数据会不一致)
    app.add_middleware(BaseMiddleware)
    app.add_middleware(
        SessionMiddleware,
        secret_key=config.SESSION_SECRET_KEY,
        session_cookie=config.SESSION_COOKIE,
        max_age=config.SESSION_MAX_AGE
    )
    app.add_middleware(
        CORSMiddleware,
        allow_origins=config.CORS_ORIGINS,
        allow_credentials=config.CORS_ALLOW_CREDENTIALS,
        allow_methods=config.CORS_ALLOW_METHODS,
        allow_headers=config.CORS_ALLOW_HEADERS
    )

    # 异常处理
    app.add_exception_handler(RequestException, request_error_handler)
    app.add_exception_handler(RequestValidationError, http422_error_handler)

    # 静态目录
    if not os.path.exists(config.STATIC_DIR):
        os.mkdir(config.STATIC_DIR)
    app.mount('/static', StaticFiles(directory=config.STATIC_DIR))

    return app