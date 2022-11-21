from loguru import logger

from apps.wechat.tool.event_wechat import EventWechat


class WaiMaiWechat(EventWechat):
    MEITUAN_KEY = 'meituan_key'

    def __init__(self, app_id):
        super().__init__(app_id)
        logger.info(f'--- 初始化: {self.__class__}')

    async def subscribe(self, data):
        await super().subscribe(data)

        open_id = data['FromUserName']
        content = """
        宝|ω•`)✧
        终于等到你❤️
        你的外卖红包就由我承包咯[跳跳]
        
        点餐前，记得来领取红包哦[红包]
        """
        await self.send_text_msg(open_id, content)

        # TODO 新人福利

    async def click(self, data):
        open_id = data['FromUserName']
        event_key = data['EventKey']
        if event_key == self.MEITUAN_KEY:
            content = """
            「今日-美团红包已来袭」
            ----------------------

            [红包]<a href="" data-miniprogram-appid="wxde8ac0a21135c07d" data-miniprogram-path="">美团外卖红包</a>

            ----------------------
            每天都要记得按时吃饭哦|ω•`)✧
            """
            await self.send_text_msg(open_id, content)
