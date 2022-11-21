from fastapi import APIRouter
from apps.common.utils.response import success
from apps.wechat.tool.base_wechat import BaseWechat

router = APIRouter(prefix='/menu')


@router.get('', summary='查询菜单')
async def menu(app_id: str):
    """创建菜单"""
    res_data = await BaseWechat(app_id=app_id).get_menu()
    return success(res_data)


@router.post('', summary='创建菜单')
async def menu(app_id: str, data: dict):
    """"""
    await BaseWechat(app_id=app_id).creat_menu(data)
    return success()