from fastapi import APIRouter, Depends, Request
from starlette.responses import RedirectResponse, HTMLResponse
from loguru import logger

from apps.common.utils.tool import parse_xml
from apps.wechat.depends.auth import check_sign
from apps.wechat.tool.event_wechat import EventWechat
from apps.wechat.tool.waimai_wechat import WaiMaiWechat

router = APIRouter(prefix='/service')

@router.get('/open', summary='跳转连接')
async def open(url: str):
    """跳转链接"""
    logger.info(f'---- 跳转链接: {url}')
    return RedirectResponse(url=url)

@router.get('', summary='校验请求')
async def service(echostr: str, params: dict = Depends(check_sign)):
    logger.info(f'---- params: {params} echostr: {echostr}')
    return HTMLResponse(echostr)

@router.post('', summary='消息推送')
async def service(req: Request, params: dict = Depends(check_sign)):
    """
    微信服务器在五秒内收不到响应会断掉连接，并且重新发起请求，总共重试三次
    假如服务器无法保证在五秒内处理并回复，可以直接回复空串，微信服务器不会对此作任何处理，并且不会发起重试
    """
    app_id = params['app_id']
    body = await req.body()
    data = parse_xml(body)
    logger.info(f'---- body data: {body}')

    if app_id == 'wx56027a4aa69be6d8':
        wechat_tool = WaiMaiWechat(app_id=app_id)
    else:
        wechat_tool = EventWechat(app_id=app_id)

    msg_type = data['MsgType']
    if msg_type == 'event':
        event = data['Event'].lower()
        if event == 'subscribe':
            await wechat_tool.subscribe(data)
        elif event == 'unsubscribe':
            await wechat_tool.unsubscribe(data)
        elif event == 'scan':
            pass
        elif event == 'click':
            await wechat_tool.click(data)
        elif event == 'view':
            pass

    elif msg_type == 'text':
        pass

    elif msg_type == 'image':
        pass

    elif msg_type == 'voice':
        pass

    elif msg_type == 'video':
        pass

    elif msg_type == 'shortvideo':
        pass

    elif msg_type == 'link':
        pass

    return HTMLResponse('success')




