import json
from typing import Any
from tortoise import fields
from tortoise.expressions import Q
from tortoise.transactions import in_transaction

from common.databases.mysql import MySQLUtils


class BaseModel(MySQLUtils):

    @classmethod
    async def delete(cls, record=True, *args: Q, **kwargs: Any):
        """删除数据请使用此函数，记录删除的数据，方便回溯"""
        async with in_transaction():
            queryset = cls.filter(*args, **kwargs)
            if record:  # 记录删除日志
                for row in await queryset:
                    row_data = await cls.model2dict(row, include=list(cls._meta.fields))
                    row_id = row_data.pop('id')
                    await DeletedData.create(table_name=cls._meta.db_table, row_id=row_id, row_data=json.dumps(row_data, ensure_ascii=False))
            await queryset.delete()

    @classmethod
    async def restore(cls, row_id):
        """恢复删除的数据"""
        async with in_transaction():
            deleted_data = await DeletedData.get_or_none(table_name=cls._meta.db_table, row_id=row_id)
            if deleted_data:
                row_data = json.loads(deleted_data.row_data)
                await cls.create(id=row_id, **row_data)
                await deleted_data.delete(record=False)

    class Meta:
        abstract = True


class UpdateModel(BaseModel):
    create_time = fields.DatetimeField(auto_now_add=True, description='创建时间')
    update_time = fields.DatetimeField(auto_now=True, description='更新时间')

    class Meta:
        abstract = True


# 如无需update_time时使用，节省磁盘空间
class CreateModel(BaseModel):
    create_time = fields.DatetimeField(auto_now_add=True, description='创建时间')

    class Meta:
        abstract = True


class DeletedData(BaseModel):
    id = fields.IntField(pk=True)
    table_name = fields.CharField(index=True, max_length=32, description='表名')
    row_id = fields.IntField(index=True, default=0, description='对应表的主键ID')
    row_data = fields.TextField(description='行数据，json格式')
    delete_time = fields.DatetimeField(auto_now_add=True, description='删除时间')

    class Meta:
        table = 'deleted_data'
        table_description = '删除数据记录表'
