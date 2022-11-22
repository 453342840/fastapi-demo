from fastapi import APIRouter, Depends, Security, Request
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from apps.common.utils.response import fail, success
from apps.user.curd.user import add_user
from apps.user.schemas.user import UserInfo
from apps.user.utils.auth import authenticate_user, create_access_token, login_require

router = APIRouter()


@router.post('/oauth2', summary='OAuth2认证')
async def oath2(data: OAuth2PasswordRequestForm = Depends()):
    user = await authenticate_user(data.username, data.password)
    if not user:
        return fail('账户或密码错误')
    user_data = {'id': user.id}
    access_token, expire = create_access_token(user_data)
    return {'access_token': access_token, "token_type": "bearer"}


@router.post('/login', summary='登录用户')
async def login(data: UserInfo):
    user = await authenticate_user(data.username, data.password)
    if not user:
        return fail('账户或密码错误')

    user_data = {'id': user.id}
    access_token, expire = create_access_token(user_data)
    res_data = {
        'token': access_token,
        'expire': expire
    }
    return success(data=res_data, msg='登陆成功')


@router.post('/create', summary='创建用户')
async def create(data: UserInfo):
    success, result = add_user(**data.dict())
    if not success:
        return fail(msg=result)

    return success(msg=f"用户{result.username}创建成功")


@router.get('/info', summary='用户信息', dependencies=[Security(login_require)])
async def info(req: Request):
    return success(req.state.user)
