from fastapi import APIRouter
from apps.user.api import login_api, sms_api, menu_api, user_api
from apps.user.config import config

api_router = APIRouter(prefix=f'/api/{config.APP_NAME}')
api_router.include_router(login_api.router, tags=['登录接口'])
api_router.include_router(menu_api.router, tags=['菜单接口'])
api_router.include_router(sms_api.router, tags=['短信接口'])
api_router.include_router(user_api.router, tags=['用户接口'])