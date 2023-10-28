from enum import IntEnum

from tortoise import fields
from common.models.base import UpdateModel


class User(UpdateModel):
    class Status(IntEnum):
        disable = 0  # 禁用
        enable = 1   # 启用

    id = fields.IntField(pk=True)
    username = fields.CharField(unique=True, max_length=32, description='账号')
    nickname = fields.CharField(index=True, max_length=32, description='昵称')
    phone = fields.CharField(unique=True, default='', max_length=16, description='手机号')
    avatar = fields.CharField(default='', max_length=128, description='头像')
    password = fields.CharField(max_length=64, description='密码')
    status = fields.IntEnumField(Status, default=Status.disable, description='用户状态')

    roles: fields.ManyToManyRelation['Role']

    class Meta:
        table = 'user'
        table_description = '用户'

    class PydanticMeta:
        exclude = ['password']


class Role(UpdateModel):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=32, description='角色名称')
    status = fields.BooleanField(default=True, description='启用、禁用')
    desc = fields.CharField(default='', max_length=255, description='角色描述')
    # related_name统一加复数结尾
    user = fields.ManyToManyField('default.User', related_name='roles', db_constraint=False)
    menu = fields.ManyToManyField('default.Menu', related_name='roles', db_constraint=False)

    class Meta:
        table_description = '角色表'
        table = 'role'


class Menu(UpdateModel):
    id = fields.IntField(pk=True)
    parent_id = fields.IntField(index=True, default=0, description='父id')
    title = fields.CharField(max_length=32, description='权限标题')
    name = fields.CharField(max_length=32, description="权限名称（路径）")
    desc = fields.CharField(default='', max_length=255, description='权限描述')
    icon = fields.CharField(default='', max_length=255, description='菜单图标')
    is_menu = fields.BooleanField(default=False, description='是否为菜单')
    scopes = fields.CharField(default='', max_length=255, description='权限范围标识')
    sort = fields.IntField(default=0, description='同级别下的排序，从小到达')

    roles: fields.ManyToManyRelation['Role']

    class Meta:
        table_description = '菜单表'
        table = 'menu'
