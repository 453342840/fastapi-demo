from fastapi import APIRouter, Security
from apps.user.service.menu_service import get_routes
from common.depends.login_auth import login_require
from common.models.user import User
from common.utils.response import success

router = APIRouter(prefix='/menu')


@router.post('/routes', summary='获取菜单路由')
async def menu_routes(user: User = Security(login_require)):
    routes, home_name = await get_routes(user.id)
    return success({'routes': routes, 'home': home_name})
