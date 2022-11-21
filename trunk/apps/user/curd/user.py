import time
from typing import Optional

from apps.user.models.user import User
from apps.user.tool.auth import pwd_context


async def add_user(username: str, password: str, nickname: Optional[str] = None):
    user = await User.get_or_none(username=username)
    if user:
        return False, f"用户名{username}已经存在!"

    password_hash = pwd_context.hash(password)
    user_data = {
        'username': username,
        'password': password_hash,
        'nickname': nickname if nickname else f'用户{int(time.time() * 1000)}'
    }
    create_user = await User.create(**user_data)
    return True, create_user