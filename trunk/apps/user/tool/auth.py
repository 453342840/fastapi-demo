from datetime import datetime, timedelta
from fastapi import Depends, Request, HTTPException, status
from fastapi.security.oauth2 import OAuth2PasswordBearer, SecurityScopes
from jose import jwt, JWTError
from loguru import logger
from passlib.context import CryptContext
from pydantic import ValidationError

from apps.user.config import config
from apps.user.models.user import User, User_Pydantic, Permission

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2 = OAuth2PasswordBearer(config.OAUTH2_URL, scopes={'is_admin': '超级管理员'})


async def authenticate_user(username: str, password: str):
    user = await User.get_or_none(username=username)
    if not user:
        return None

    if not pwd_context.verify(password, user.password):
        return None

    return user


def create_access_token(data: dict):
    _data = data.copy()
    expire = datetime.now() + timedelta(seconds=config.ACCESS_TOKEN_EXPIRE_SECONDS)

    _data.update({"exp": expire})
    jwt_token = jwt.encode(_data, config.JWT_SECRET_KEY, algorithm=config.JWT_ALGORITHM)
    return jwt_token, config.ACCESS_TOKEN_EXPIRE_SECONDS


async def login_require(req: Request, security_scopes: SecurityScopes, token=Depends(oauth2)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": f'Bearer token="{token}" scope="{security_scopes.scope_str}"'},
    )

    try:
        payload = jwt.decode(token, config.JWT_SECRET_KEY, algorithms=[config.JWT_ALGORITHM])
        user_id = payload.get("id", None)
        if not user_id:
            raise credentials_exception
        user = await User.get_or_none(id=user_id)
        if not user:
            raise credentials_exception
    except (JWTError, ValidationError):
        raise credentials_exception

    # 判断是否设置了权限域
    if security_scopes.scopes:
        # 非超级管理员且当前域需要验证
        if not user.is_admin and security_scopes.scopes:
            permission = await Permission.filter(role__user__id=user_id, scopes__in=set(security_scopes.scopes)).all()
            if not permission:
                raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN,
                    detail="Not permissions",
                    headers={"scopes": security_scopes.scope_str},
                )

    user_pyd = await User_Pydantic.from_tortoise_orm(user)
    req.state.user = user_pyd.dict()

