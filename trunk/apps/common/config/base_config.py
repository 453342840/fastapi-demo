import os
from pydantic import BaseSettings
from typing import List


class BaseConfig(BaseSettings):
    # 项目信息
    APP_DEBUG: bool = False
    APP_TITLE: str = "星陈大海"
    APP_NAME: str = ''  # 子配置覆盖

    # 跨域请求
    CORS_ORIGINS: List[str] = ['*']
    CORS_ALLOW_CREDENTIALS: bool = True
    CORS_ALLOW_METHODS: List[str] = ['*']
    CORS_ALLOW_HEADERS: List[str] = ['*']

    # Session
    SECRET_KEY: str = 'session'
    SESSION_COOKIE: str = 'session_id'
    SESSION_MAX_AGE: int = 30 * 24 * 60 * 60

    # 默认MySQL
    MYSQL_URL: str = 'mysql://root:1234@127.0.0.1:3306/db'

    # 默认Redis
    REDIS_URL: str = 'redis://127.0.0.1:6379'

    # 静态文件目录
    STATIC_DIR: str = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../static"))

    # .evn覆盖已有配置
    class Config:
        env_file = '.env'

settings = BaseConfig()
