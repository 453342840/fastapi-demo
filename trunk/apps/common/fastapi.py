from fastapi import FastAPI, HTTPException
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from starlette.staticfiles import StaticFiles

from apps.common.config.base_config import BaseConfig
from apps.common.event.base_event import startup, shutdown
from apps.common.exception.base_exception import http_error_handler, http422_error_handler
from apps.common.middleware.base_middleware import BaseMiddleware


def start_fastapi(config: BaseConfig):
    app = FastAPI(
        debug=config.APP_DEBUG,
        title=config.APP_TITLE,
        openapi_url=f'/{config.APP_NAME}/openapi.json',
        docs_url=f'/{config.APP_NAME}/docs',
        redoc_url=f'/{config.APP_NAME}/redoc'
    )

    # 事件监听
    app.add_event_handler('startup', startup(app, config.APP_NAME))
    app.add_event_handler('shutdown', shutdown(app))

    # 中间件
    app.add_middleware(BaseMiddleware)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=config.CORS_ORIGINS,
        allow_credentials=config.CORS_ALLOW_CREDENTIALS,
        allow_methods=config.CORS_ALLOW_METHODS,
        allow_headers=config.CORS_ALLOW_HEADERS
    )
    app.add_middleware(
        SessionMiddleware,
        secret_key=config.SECRET_KEY,
        session_cookie=config.SESSION_COOKIE,
        max_age=config.SESSION_MAX_AGE
    )

    # 异常处理
    app.add_exception_handler(HTTPException, http_error_handler)
    app.add_exception_handler(RequestValidationError, http422_error_handler)

    # 静态目录
    app.mount('/static', StaticFiles(directory=config.STATIC_DIR))

    return app