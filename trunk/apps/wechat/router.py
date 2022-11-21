from fastapi import APIRouter
from apps.wechat.api import service, menu
from apps.wechat.config import config

api_router = APIRouter(prefix=f'/api/{config.APP_NAME}')
api_router.include_router(service.router, tags=['微信服务管理'])
api_router.include_router(menu.router, tags=['微信菜单管理'])
