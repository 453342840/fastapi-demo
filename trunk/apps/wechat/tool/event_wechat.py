from apps.wechat.models.wechat import WechatUser
from apps.wechat.tool.base_wechat import BaseWechat


class EventWechat(BaseWechat):

    def __init__(self, app_id):
        super().__init__(app_id)

    async def subscribe(self, data):
        """关注事件"""
        # 拉取用户信息
        open_id = data['FromUserName']
        await self.get_user_info(open_id)
        await WechatUser.filter(open_id=open_id).update(subscribe=1)

    async def unsubscribe(self, data):
        """取关事件"""
        open_id = data['FromUserName']
        await WechatUser.filter(open_id=open_id).update(subscribe=0)

    async def click(self, data):
        """点击自定义菜单事件"""
        pass
