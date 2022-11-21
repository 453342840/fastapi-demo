import asyncio
import datetime
import functools
import json

from loguru import logger
from tortoise.transactions import in_transaction

from apps.common.const import WECHAT_TOKEN
from apps.common.databases.mysql import AioMySQL
from apps.common.databases.redis import AioRedis
from apps.common.utils import aiorequests
from apps.wechat.models.wechat import WechatApp, WechatUser, WechatUserTagid


class WechatException(Exception):
    """自定义异常"""

    # 错误码
    SUCCESS = 0
    SYSTEM_BUSY = 1
    API_UNAUTHORIZED = 48001

    def __init__(self, code, msg):
        Exception.__init__(self, msg)
        self.code = code

def check_retry(func):
    """检测code失败重试装饰器"""
    @functools.wraps(func)
    async def wrapper(self, *args, **kwargs):
        i = 0
        exc = None
        while i < 3:
            try:
                result = await func(self, *args, **kwargs)
                return result
            except WechatException as we:
                exc = we
                if we.code == WechatException.API_UNAUTHORIZED:
                    logger.error(we)
                    return
            except Exception as e:
                exc = e

            i += 1
            await asyncio.sleep(0.1)
        else:
            raise exc
    return wrapper

class BaseWechat:
    def __init__(self, app_id):
        self.app_id = app_id
        self.token_key = WECHAT_TOKEN.format(app_id=self.app_id)
        self.origin = 'https://api.weixin.qq.com'

    async def get_token(self):
        token = await AioRedis.get(self.token_key)
        if token:
            return token

        wapp = await WechatApp.get(app_id=self.app_id)
        url = f'{self.origin}/cgi-bin/token?grant_type=client_credential&appid={wapp.app_id}&secret={wapp.secret}'
        res_data = await aiorequests.get(url)
        logger.info(f'---- 获取token: {res_data}')
        access_token = res_data['access_token']
        expires_in = res_data['expires_in']

        await AioRedis.set(self.token_key, access_token, expires_in - 10 * AioRedis.MINUTE)
        return access_token

    async def refresh_token(self):
        await AioRedis.delete(self.token_key)
        await self.get_token()

    @check_retry
    async def send_kf_msg(self, data):
        """发送客服消息
        https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html#6
        """
        logger.info(f'---- 发送客服消息: {data}')
        token = await self.get_token()
        url = f'https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token={token}'
        res_data = await aiorequests.post(url, data)
        if res_data['errcode'] != 0:
            raise WechatException(res_data['errcode'], json.dumps(res_data))


    async def send_text_msg(self, open_id, content):
        """发送文本客服消息"""
        msg_text = {
            "touser": open_id,
            "msgtype": 'text',
            "text": {
                "content": content
            }
        }
        await self.send_kf_msg(msg_text)

    async def get_user_info(self, openid):
        """获取用户信息
        https://developers.weixin.qq.com/doc/offiaccount/User_Management/Get_users_basic_information_UnionID.html#UinonId
        """
        logger.info(f'---- 获取用户信息: {openid}')
        token = await self.get_token()
        url = f'https://api.weixin.qq.com/cgi-bin/user/info?access_token={token}&openid={openid}'
        res_data = await aiorequests.get(url)
        errcode = res_data.get('errcode', None)
        if errcode and errcode != 0:
            raise WechatException(res_data['errcode'], json.dumps(res_data))

        update_data = {
            'app_id': self.app_id,
            'openid': res_data['openid'],
            'unionid': res_data.get('unionid', ''),
            'subscribe': res_data['subscribe'],
            'subscribe_time': datetime.datetime.fromtimestamp(res_data['subscribe_time']),
            'remark': res_data.get('remark', ''),
            'subscribe_scene': res_data.get('subscribe_scene', ''),
            'qr_scene': res_data.get('qr_scene', ''),
            'qr_scene_str': res_data.get('qr_scene_str', '')
        }
        tagid_list: dict = res_data.get('tagid_list', [])
        async with in_transaction():
            await WechatUser.update_or_create(openid=openid, defaults=update_data)
            await WechatUserTagid.filter(openid=openid).delete()
            for tagid in tagid_list:
                await WechatUserTagid.create(openid=openid, tagid=tagid)

    async def creat_menu(self, data):
        """创建菜单
        https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Creating_Custom-Defined_Menu.html
        """
        logger.info(f'---- 创建菜单: {data}')
        token = await self.get_token()
        url = f'https://api.weixin.qq.com/cgi-bin/menu/create?access_token={token}'
        res_data = await aiorequests.post(url, data)
        if res_data['errcode'] != 0:
            raise WechatException(res_data['errcode'], json.dumps(res_data))

    async def get_menu(self):
        """查询菜单
        https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Querying_Custom_Menus.html
        """
        logger.info(f'---- 查询菜单')
        token = await self.get_token()
        url = f'https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info?access_token={token}'
        res_data = await aiorequests.get(url)
        errcode = res_data.get('errcode', None)
        if errcode and errcode != 0:
            raise WechatException(res_data['errcode'], json.dumps(res_data))
        return res_data

async def main():
    await AioRedis.connect()
    await AioMySQL.connect()

    wechat = BaseWechat(app_id='wxe71283d23d76f409')
    print(await wechat.get_token())

if __name__ == '__main__':
    asyncio.run(main())

# env PYTHONPATH=. python apps/wechat/tool/base_wechat.py

