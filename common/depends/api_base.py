import json

from fastapi import Request, Depends

from common.models.wechat import WechatAppUser


async def get_referer(req: Request):
    """获取referer"""
    referer = req.headers.get('referer')
    return referer


async def get_user_agent(req: Request):
    """获取user_agent"""
    user_agent = req.headers.get('user-agent')
    return user_agent


async def get_uuid(req: Request):
    """获取uuid"""
    return req.session.get('uuid')


async def get_open_id(wechat_app_id: int, uuid: str = Depends(get_uuid)):
    """获取用户的open_id"""
    app_user = await WechatAppUser.get_or_none(wechat_app_id=wechat_app_id, uuid=uuid)
    return app_user.open_id if app_user else None
