from typing import Optional
from fastapi import APIRouter, Security
from tortoise.expressions import Q
from apps.user.schemas.user import UserForm
from common.depends.login_auth import login_require
from common.models.user import User
from common.utils.response import success

router = APIRouter()


@router.get('/info', summary='当前用户信息')
async def info(user: User = Security(login_require)):
    user_data = await User.get_data(user)
    return success(user_data)


@router.put('/info/{id}', summary='编辑指定用户信息', dependencies=[Security(login_require)])
async def info(id: int, data: UserForm):
    dict_data = data.dict()
    await User.filter(id=id).update(**dict_data)
    return success()


@router.get('/query', summary='所有用户列表')
async def query(username: Optional[str] = '', nickname: Optional[str] = '', page: int = 1, page_size: int = 10):
    q = Q()
    if username:
        q = q & Q(username__contains=username)
    if nickname:
        q = q & Q(nickname__contains=nickname)

    queryset = User.filter(q)
    user_data = await User.query_data(queryset, page=page, page_size=page_size)
    return success(user_data)