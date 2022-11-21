from tortoise import fields, models
from apps.common.models.base_model import BaseModel, CreateModel


class WechatApp(models.Model):
    app_id = fields.CharField(max_length=32, unique=True)
    name = fields.CharField(max_length=16, description='名称')
    secret = fields.CharField(max_length=32, description='开发者密钥')
    token = fields.CharField(max_length=32, description='令牌')
    msg_secret = fields.CharField(max_length=43, description='消息密钥')

    class Meta:
        table_description = "微信公众号"
        table = "wechat_app"

class WechatUser(BaseModel):
    app_id = fields.CharField(max_length=32)
    openid = fields.CharField(unique=True, max_length=32)
    unionid = fields.CharField(max_length=32)
    subscribe = fields.SmallIntField(description='是否关注')
    subscribe_time = fields.DatetimeField(description='关注时间')
    remark = fields.CharField(max_length=32, description='运营者对粉丝的备注')
    subscribe_scene = fields.CharField(max_length=16, description='用户关注的渠道来源')
    qr_scene = fields.IntField(default=0, description='二维码扫码场景')
    qr_scene_str = fields.CharField(max_length=32, default='', description='二维码扫码场景描述')

    class Meta:
        table_description = "公众号用户"
        table = "wechat_user"

class WechatUserTagid(CreateModel):
    """公众号用户标签"""
    openid = fields.CharField(max_length=32)
    tagid = fields.IntField(description='标签ID')

    class Meta:
        table_description = "公众号用户标签"
        table = "wechat_user_tagid"