from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from loguru import logger

from apps.user.schemas.user import LoginUserForm, RegisterUserForm, LoginPhoneForm, ResetPasswordForm, RefreshForm
from apps.user.service.user_service import authenticate_user, create_access_token, login_token, refresh_access_token
from common.const.const import REFRESH_TOKEN_EXPIRE
from common.const.redis_const import VERIFY_CODE
from common.databases.redis import AioRedis
from common.depends.login_auth import pwd_context
from common.models.user import User
from common.utils.func import nonce_str, sha1
from common.utils.response import fail, success


router = APIRouter(prefix='/login')


@router.post('/auth_token', summary='docs认证登录')
async def auth_token(data: OAuth2PasswordRequestForm = Depends()):
    """后台docs认证登录方法"""

    user = await authenticate_user(data.username, sha1(data.password))
    if not user:
        raise HTTPException(status_code=403, detail="账户或密码错误")

    user_data = {'id': user.id}
    access_token, expire = create_access_token(user_data, expire=24 * 60 * 60)
    return {'access_token': access_token, "token_type": "bearer"}


@router.post('/refresh_token', summary='登录用户')
async def refresh_token(data: RefreshForm):
    res_data = refresh_access_token(data.token)
    if not res_data:
        return fail('凭证已过期', code=REFRESH_TOKEN_EXPIRE)
    return success(data=res_data)


@router.post('', summary='登录用户')
async def login(data: LoginUserForm):
    user = await authenticate_user(data.username, data.password)
    if not user:
        return fail('账户或密码错误')

    user_data = {'id': user.id, 'remember_me': data.remember_me}
    res_data = login_token(user_data)
    return success(data=res_data)


@router.post('/use_phone', summary='手机登录')
async def use_phone(data: LoginPhoneForm):
    user = await User.get_or_none(phone=data.phone)
    if not user:
        return fail(f'用户不存在')

    redis_key = VERIFY_CODE.format(phone=data.phone)
    verify_code = await AioRedis.get(redis_key)
    if data.code != verify_code:
        return fail('验证码错误')
    else:
        await AioRedis.delete(redis_key)

    user_data = {'id': user.id, 'remember_me': data.remember_me}
    res_data = login_token(user_data)
    return success(data=res_data)


@router.post('/register', summary='注册用户')
async def register(data: RegisterUserForm):
    user = await User.get_or_none(username=data.username)
    if user:
        return fail(f'账号{data.username}已经存在')

    user = await User.get_or_none(phone=data.phone)
    if user:
        return fail(f'手机号{data.phone}已绑定其他用户')

    redis_key = VERIFY_CODE.format(phone=data.phone)
    verify_code = await AioRedis.get(redis_key)
    if data.code != verify_code:
        return fail('验证码错误')

    user_data = {
        'username': data.username,
        'password': pwd_context.hash(data.password),
        'nickname': '用户{0}'.format(nonce_str(6)),
        'phone': data.phone,
        'status': User.Status.enable
    }
    await User.create(**user_data)
    await AioRedis.delete(redis_key)
    return success()


@router.post('/reset_password', summary='重置密码')
async def reset_password(data: ResetPasswordForm):
    user = await User.get_or_none(phone=data.phone)
    if not user:
        return fail(f'用户不存在')

    redis_key = VERIFY_CODE.format(phone=data.phone)
    verify_code = await AioRedis.get(redis_key)
    if data.code != verify_code:
        return fail('验证码错误')
    else:
        await AioRedis.delete(redis_key)

    user.password = pwd_context.hash(data.password)
    await user.save()
    return success()


