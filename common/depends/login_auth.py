from typing import Optional
from fastapi import Request, Depends, HTTPException
from fastapi.security import SecurityScopes, OAuth2PasswordBearer
from jose import jwt
from jose.exceptions import JWTError, JWTClaimsError, ExpiredSignatureError
from loguru import logger
from passlib.context import CryptContext
from pydantic import ValidationError
from starlette import status
from common.base_config import settings
from common.const.const import TOKEN_EXPIRE, TOKEN_INVALID, USER_DISABLE, NO_LOGIN
from common.exception.base_exception import RequestException
from common.models.user import User, Menu

# 此处是公共的依赖，请思考如过需要再不同服务使用时才在次文件添加
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2 = OAuth2PasswordBearer(settings.OAUTH2_URL, auto_error=False)


async def get_user_data(token, security_scopes) -> User:
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        user_id = payload.get('id', None)
        if not user_id:
            raise Exception(f'用户 {user_id} 不存在')
        user = await User.get_or_none(id=user_id)
        if not user:
            raise Exception(f'用户 {user_id} 不存在')
    except ExpiredSignatureError:
        raise RequestException(
            code=TOKEN_EXPIRE,
            message='凭证过期～'
        )
    except (JWTError, JWTClaimsError, ValidationError):
        raise RequestException(
            code=TOKEN_INVALID,
            message='凭证无效～'
        )
    except Exception as e:
        raise RequestException(
            code=NO_LOGIN,
            message='请先登录～'
        )

    if user.status != User.Status.enable:
        raise RequestException(
            code=USER_DISABLE,
            message='请联系管理员启用账户～'
        )

    # 判断是否设置了权限域
    if security_scopes.scopes:
        # 非超级管理员且当前域需要验证
        menus = await Menu.filter(role__user__id=user_id, is_menu=False, scopes__in=set(security_scopes.scopes))
        if not menus:
            raise RequestException(
                code=USER_DISABLE,
                message='请联系管理员开启权限～'
            )

    return user


async def login_require_none(req: Request, security_scopes: SecurityScopes, token=Depends(oauth2)) -> Optional[User]:
    """验证用户是否登录，未登录返回None，不抛出异常"""
    if not token:
        return None

    try:
        user = await get_user_data(token, security_scopes)
    except Exception as e:
        logger.warning(e)

    req.state.user = user
    return user


async def login_require(req: Request, security_scopes: SecurityScopes, token=Depends(oauth2)) -> User:
    """验证用户是否登录，未登录抛出异常提示"""
    user = await get_user_data(token, security_scopes)
    req.state.user = user
    return user

