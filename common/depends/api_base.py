from fastapi import Request, Depends


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


