import datetime
from typing import List, Optional, Any, Union
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from tortoise import Tortoise, Model
from tortoise.contrib.fastapi import register_tortoise
from tortoise.queryset import QuerySetSingle, QuerySet
from common.base_config import settings
from contextlib import asynccontextmanager


mysql_models = [
    'aerich.models',
    'common.models.base',
    'common.models.user'
]

mysql_config = {
    'connections': {
        'default': settings.MYSQL_URL,  # 默认数据库连接
    },
    'apps': {
        'default': {'models': mysql_models, 'default_connection': 'default'},
    },
    'use_tz': False,
    'timezone': 'Asia/Shanghai'
}


class AioMysql:

    ### 事务的两种方式：
    # async with in_transaction() as connection:  （推荐使用）
    #     pass
    #
    # @atomic('default')  （不推荐使用）
    # def func():
    #     pass
    #

    @classmethod
    async def connect(cls):
        await Tortoise.init(config=mysql_config)

    @classmethod
    async def close(cls):
        await Tortoise.close_connections()

    @classmethod
    async def register_mysql(cls, app: FastAPI):
        # 注册数据库，FastAPI用
        register_tortoise(
            app,
            config=mysql_config,
            generate_schemas=False,
            add_exception_handlers=False
        )

    @classmethod
    @asynccontextmanager
    async def excete(cls):
        """
        :example:
            async with AioMySQL.excete():
                await async_func()
        """
        await cls.connect()
        yield
        await cls.close()


class MySQLUtils(Model):
    @staticmethod
    def json_encoder(
            obj: Any,
            include: Optional[List[str]] = None,
            exclude: Optional[List[str]] = None,
    ):
        return jsonable_encoder(
            obj,
            include=include,
            exclude=exclude,
            custom_encoder={
                datetime.datetime: lambda dt: datetime.datetime.strftime(dt, '%Y-%m-%d %H:%M:%S')
            }
        )

    @classmethod
    async def model2dict(
            cls,
            model: Model,
            include: Optional[List[str]] = None,
            exclude: Optional[List[str]] = None,
            fetch_related: Optional[List[str]] = None,
            **kwargs
    ) -> dict:
        meta = getattr(cls, 'PydanticMeta', getattr(cls, 'Meta', None))
        if meta:
            _include = getattr(meta, 'include', None)
            _exclude = getattr(meta, 'exclude', None)
            if _include:
                include = list(set(include + _include)) if include else _include
            if _exclude:
                exclude = list(set(exclude + _exclude)) if exclude else _exclude

        if include and exclude:
            for include_field in include:
                if include_field in exclude:
                    exclude.remove(include_field)

        result = cls.json_encoder(
            obj=model,
            include=include,
            exclude=exclude
        )

        fix_data = getattr(model, 'fix_data', None)
        if fix_data and callable(fix_data):
            fix_data(result)

        if fetch_related:
            for fr in fetch_related:
                fr_include = kwargs.get(f'{fr}_include')
                fr_exclude = kwargs.get(f'{fr}_exclude')
                fr_field = getattr(model, fr)
                if not fr_field:
                    continue
                fr_model = await fr_field

                fr_meta = getattr(fr_model, 'PydanticMeta', None)
                if fr_meta:
                    _fr_include = getattr(fr_meta, 'include', None)
                    _fr_exclude = getattr(fr_meta, 'exclude', None)
                    if _fr_include:
                        fr_include = list(set(exclude + _fr_include)) if fr_include else _fr_include
                    if _fr_exclude:
                        fr_exclude = list(set(exclude + _fr_exclude)) if fr_exclude else _fr_exclude

                if fr_include and fr_exclude:
                    for fr_include_field in fr_include:
                        fr_index = fr_exclude.index(fr_include_field)
                        if fr_index > -1:
                            fr_exclude.pop(fr_index)

                fix_data = None
                if isinstance(fr_model, list) and fr_model:
                    fix_data = getattr(fr_model[0], 'fix_data', None)
                elif isinstance(fr_model, Model):
                    fix_data = getattr(fr_model, 'fix_data', None)

                fr_result = cls.json_encoder(
                    obj=fr_model,
                    include=fr_include,
                    exclude=fr_exclude
                )

                if fix_data and callable(fix_data):
                    if isinstance(fr_result, list):
                        for frr in fr_result:
                            fix_data(frr)
                    elif isinstance(fr_result, dict):
                        fix_data(fr_result)

                result[fr] = fr_result
        return result

    @classmethod
    async def get_data(
            cls,
            queryset_model: Union[QuerySetSingle, Model],
            include: Optional[List[str]] = None,
            exclude: Optional[List[str]] = None,
            fetch_related: Optional[List[str]] = None,
            **kwargs
    ) -> Optional[dict]:
        """将model转化成dict"""
        if isinstance(queryset_model, Model):
            if fetch_related:
                await queryset_model.fetch_related(*fetch_related)
            model = queryset_model
        else:
            if fetch_related:
                queryset_model = queryset_model.prefetch_related(*fetch_related)
            model = await queryset_model

        if not model:
            return None
        result = await cls.model2dict(model, include, exclude, fetch_related, **kwargs)
        return result

    @classmethod
    async def query_data(
            cls,
            queryset: QuerySet,
            page: int = 0,
            page_size: int = 0,
            nocount: bool = False,
            include: Optional[List[str]] = None,
            exclude: Optional[List[str]] = None,
            fetch_related: Optional[List[str]] = None,
            **kwargs
    ) -> dict:
        """将model转化成dict"""
        result = {'items': []}
        if not nocount:
            result['count'] = await queryset.count()
        if page:
            queryset = queryset.offset((page - 1) * page_size)
        if page_size:
            queryset = queryset.limit(page_size)
        if fetch_related:
            queryset = queryset.prefetch_related(*fetch_related)

        model_list = await queryset
        for model in model_list:
            item = await cls.model2dict(model, include, exclude, fetch_related, **kwargs)
            result['items'].append(item)

        return result

    class Meta:
        abstract = True

