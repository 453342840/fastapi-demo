from apps.common.config.base_config import BaseConfig


class Config(BaseConfig):
    APP_DEBUG: bool = True
    APP_NAME = 'wechat'
    APP_TITLE = '用户服务'

config = Config()
