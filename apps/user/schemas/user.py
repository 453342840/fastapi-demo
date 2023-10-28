from typing import Optional
from pydantic import BaseModel, Field


PHONE_REGEX = '^[1](([3][0-9])|([4][01456789])|([5][012356789])|([6][2567])|([7][0-8])|([8][0-9])|([9][012356789]))[0-9]{8}$'


class RefreshForm(BaseModel):
    token: str = Field(description='刷新token')


class LoginUserForm(BaseModel):
    username: str = Field(min_length=4, max_length=32, description='用户名')
    password: str = Field(min_length=6, max_length=64, description='密码')
    remember_me: Optional[bool]


class LoginPhoneForm(BaseModel):
    phone: str = Field(max_length=11, regex=PHONE_REGEX, description='手机号')
    code: str = Field(min_length=4, max_length=6, description='验证码')
    remember_me: Optional[bool]


class PhoneCodeForm(BaseModel):
    phone: str = Field(max_length=11, regex=PHONE_REGEX, description='手机号')


class RegisterUserForm(BaseModel):
    username: str = Field(min_length=4, max_length=32, description='用户名')
    phone: str = Field(max_length=11, regex=PHONE_REGEX, description='手机号')
    code: str = Field(min_length=4, max_length=6, description='验证码')
    password: str = Field(min_length=6, max_length=64, description='密码')


class ResetPasswordForm(BaseModel):
    phone: str = Field(max_length=11, regex=PHONE_REGEX, description='手机号')
    code: str = Field(min_length=4, max_length=6, description='验证码')
    password: str = Field(min_length=6, max_length=64, description='密码')


class UserForm(BaseModel):
    username: str = Field(min_length=4, max_length=32, description='用户名')
    nickname: str = Field(min_length=2, max_length=32, description='昵称')
    phone: str = Field(max_length=11, regex=PHONE_REGEX, description='手机号')
    avatar: str = Field(default='', max_length=128, description='头像')
    status: int = Field(default=0, description='状态')