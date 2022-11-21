from fastapi import APIRouter

from apps.user.api import user
from apps.user.config import config

api_router = APIRouter(prefix=f'/api/{config.APP_NAME}')
api_router.include_router(user.router, tags=['用户管理'])