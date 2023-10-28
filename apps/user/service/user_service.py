import copy
import datetime
import time
from typing import Optional
from jose import jwt
from common.base_config import settings
from common.depends.login_auth import pwd_context
from common.models.user import User


async def authenticate_user(username: str, password: str) -> Optional[User]:
    """认证用户"""
    user = await User.get_or_none(username=username)
    if not user:
        return None

    if not pwd_context.verify(password, user.password):
        return None

    return user


def create_access_token(data: dict, expire: int):
    """创建token"""
    cp_data = data.copy()
    expire = datetime.datetime.now() + datetime.timedelta(seconds=expire)

    cp_data.update({"exp": expire})
    jwt_token = jwt.encode(cp_data, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)

    return jwt_token, int(time.mktime(expire.timetuple()) * 1000)


def refresh_access_token(token: str):
    """刷新token"""
    refresh_data = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
    if not refresh_data.pop('is_refresh'):
        return None

    user_data = refresh_data
    return login_token(user_data)


def login_token(user_data):
    remember_me = user_data.get('remember_me', False)
    refresh_data = copy.deepcopy(user_data)
    refresh_data['is_refresh'] = True
    if remember_me:
        expire = 129600
        refresh_time = expire * 2
        access_token, expire = create_access_token(user_data, expire=expire)
        refresh_token, expire = create_access_token(refresh_data, expire=refresh_time)
    else:
        expire = 3600
        refresh_time = expire * 2
        access_token, expire = create_access_token(user_data, expire=expire)
        refresh_token, expire = create_access_token(refresh_data, expire=refresh_time)

    res_data = {
        'token': access_token,
        'expire': expire,
        'refresh_token': refresh_token
    }
    return res_data