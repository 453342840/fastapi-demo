import os
from typing import List
from pydantic import BaseSettings


class BaseConfig(BaseSettings):
    APP_NAME: str = ''
    APP_TITLE: str = ''
    APP_DEBUG: bool = False

    # 默认MySQL
    MYSQL_HOST: str = ''
    MYSQL_PORT: int = 0
    MYSQL_USER: str = ''
    MYSQL_DATABASE: str = ''
    MYSQL_PASSWORD: str = ''
    MYSQL_URL: str = ''

    # 默认Redis
    REDIS_HOST: str = ''
    REDIS_PORT: int = 0
    REDIS_DB: str = ''
    REDIS_PASSWORD: str = ''
    REDIS_URL: str = ''

    # 默认Kafka连接
    KAFKA_URL: str = ''

    # 跨域请求
    CORS_ORIGINS: List[str] = ['*']
    CORS_ALLOW_CREDENTIALS: bool = True  # 服务器允许cookie(或其他用户凭据)包含在跨源请求中.
    CORS_ALLOW_METHODS: List[str] = ['GET', 'POST', 'PUT', 'DELETE']
    CORS_ALLOW_HEADERS: List[str] = ['*']

    # docs文档接口认证
    OAUTH2_URL = '/api/user/login/auth_token'

    # 用户TOKEN配置
    JWT_ALGORITHM = "HS256"
    JWT_SECRET_KEY = '99d25e094fba6ca2278c818466a7b9563b93zs110f6f0f4cxa6cf63b78e8d314'

    # Session
    SESSION_SECRET_KEY: str = 'z5m7shvzfhcw3ll'
    SESSION_COOKIE: str = 'session'
    SESSION_MAX_AGE: int = -1   # 关闭浏览器失效

    # 静态文件目录
    STATIC_DIR: str = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../static"))

    # .evn覆盖已有配置
    class Config:
        env_file = 'envs/dev.env', 'envs/test.env', 'envs/pro.env'
        env_file_encoding = 'utf-8'


settings = BaseConfig()
