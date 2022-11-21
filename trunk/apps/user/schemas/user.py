from typing import Optional
from pydantic import BaseModel, Field

class UserInfo(BaseModel):
    username: Optional[str] = Field(min_length=6, max_length=32, description="用户名")
    password: str = Field(min_length=8, max_length=64, description="密码")
    phone: Optional[str] = Field(max_length=11, regex='^1[34567890]\\d{9}$')
    email: Optional[str] = Field(max_length=32, regex='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')

