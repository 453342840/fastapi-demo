from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator

from apps.common.models.base_model import BaseModel


class User(BaseModel):
    nickname = fields.CharField(max_length=32, description='昵称')
    username = fields.CharField(null=True, max_length=32, description='用户名')
    password = fields.CharField(null=True, max_length=64, description='密码')
    email = fields.CharField(null=True, max_length=32, description='邮箱')
    phone = fields.CharField(null=True, max_length=16, description='手机号')
    avatar = fields.CharField(null=True, max_length=128, description='头像')
    is_admin = fields.BooleanField(default=False, description='管理员')

    role: fields.ManyToManyRelation['Role'] = fields.ManyToManyField('default.Role', related_name="user", on_delete=fields.CASCADE)

    class Meta:
        table_description = '用户'
        table = 'user'

    class PydanticMeta:
        exclude = ['password', 'is_admin']


class Role(BaseModel):
    name = fields.CharField(max_length=32, description='角色名称')
    status = fields.BooleanField(default=False, description='启用、禁用')
    desc = fields.CharField(null=True, max_length=255, description='角色描述')

    user: fields.ManyToManyRelation[User]
    permission: fields.ManyToManyRelation['Permission'] = fields.ManyToManyField('default.Permission', related_name='role', on_delete=fields.CASCADE)

    class Meta:
        table_description = "角色表"
        table = "role"


class Permission(BaseModel):
    parent_id = fields.IntField(default=0, description='父id')
    name = fields.CharField(max_length=32, description="权限名称")
    desc = fields.CharField(null=True, max_length=255, description='权限描述')
    icon = fields.CharField(null=True, max_length=255, description='菜单图标')
    scopes = fields.CharField(unique=True, max_length=255, description='权限范围标识')
    is_menu = fields.BooleanField(default=False, description='是否为菜单')

    role: fields.ManyToManyRelation[Role]

    class Meta:
        table_description = "权限表"
        table = "permission"


User_Pydantic = pydantic_model_creator(User)
Role_Pydantic = pydantic_model_creator(Role)
Permission_Pydantic = pydantic_model_creator(Permission)