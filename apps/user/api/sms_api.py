import random
from fastapi import APIRouter
from loguru import logger

from apps.user.schemas.user import PhoneCodeForm
from common.const.redis_const import VERIFY_CODE
from common.databases.redis import AioRedis
from common.utils.response import success

router = APIRouter(prefix='/sms')


@router.post('/code')
async def code(data: PhoneCodeForm):
    # TODO 接入发送短信接口，做好安全检测
    code = '888888'
    # code = '%06d' % random.randint(0, 999999)
    logger.info(f'用户验证码 phone: {data.phone}  code: {code}')
    await AioRedis.set(VERIFY_CODE.format(phone=data.phone), code, ex=300)
    return success()