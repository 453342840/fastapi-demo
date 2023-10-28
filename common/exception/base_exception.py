from typing import Union
from fastapi import Request
from fastapi.responses import JSONResponse
from loguru import logger
from fastapi.exceptions import RequestValidationError
from pydantic import ValidationError
from starlette import status


class RequestException(Exception):
    """
        自定义错误返回，用于适配前端的提示
        该错误会返回 200 状态码，和自定义code、message
    """
    def __init__(self, code, message, data=None) -> None:
        self.code = code
        self.message = message
        self.data = data

    def __str__(self):
        return f'{self.message} (code={self.code})'


async def request_error_handler(_: Request, exc: RequestException):
    """
    异常处理
    :param _:
    :param exc:
    :return:
    """
    res_data = {
        'code': exc.code,
        'message': exc.message,
        'data': exc.data
    }
    logger.error(exc.message)
    return JSONResponse(res_data)


async def http422_error_handler(_: Request, exc: Union[RequestValidationError, ValidationError]) -> JSONResponse:
    """
    参数校验错误处理
    :param _:
    :param exc:
    :return:
    """
    msg = ''
    error_data = exc.errors()
    if isinstance(error_data, list):
        msg += str(error_data[0]['loc'][-1]) + ': ' + error_data[0]['msg']
    else:
        msg = error_data

    res_data = {
        "code": status.HTTP_422_UNPROCESSABLE_ENTITY,
        "message": f"参数错误 {msg}",
        "data": None
    }
    logger.error(exc.errors())
    return JSONResponse(res_data)