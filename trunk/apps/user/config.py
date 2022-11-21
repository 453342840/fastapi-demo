from apps.common.config.base_config import BaseConfig


class Config(BaseConfig):
    APP_DEBUG: bool = True
    APP_NAME = 'user'
    APP_TITLE = '用户服务'

    OAUTH2_URL = '/api/user/oauth2'
    JWT_ALGORITHM = "HS256"
    JWT_SECRET_KEY = '09d25e094faa6ca2558c818166b7a9563b92f7099f6f0f4caa6cf63b88e8d3e7'
    ACCESS_TOKEN_EXPIRE_SECONDS = 15 * 24 * 60 * 60

config = Config()
