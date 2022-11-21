from loguru import logger

from apps.common.lib.WXBizMsgCrypt import SHA1
from apps.wechat.models.wechat import WechatApp


async def check_sign(signature: str, timestamp: str, nonce: str):
    params = {}
    wechat_apps = await WechatApp.all()
    for wa in wechat_apps:
        code, _signature = SHA1().getSHA1(wa.token, timestamp, nonce)
        if signature == _signature:
            logger.info(f'--- 匹配公众号：{wa.name} {wa.app_id}')
            params['app_id'] = wa.app_id
            break

    assert params, '签名验证失败'
    return params