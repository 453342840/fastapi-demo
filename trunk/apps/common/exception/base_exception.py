from typing import Union
from fastapi import HTTPException, Request
from fastapi.responses import JSONResponse
from loguru import logger
from starlette import status
from fastapi.exceptions import RequestValidationError
from pydantic import ValidationError


async def http_error_handler(_: Request, exc: HTTPException):
    """
    异常处理
    :param _:
    :param exc:
    :return:
    """
    res_data = {
        'code': exc.status_code,
        'message': exc.detail,
        'data': None
    }
    logger.error(exc.detail)
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
        msg += error_data[0]['loc'][-1] + ': ' + error_data[0]['msg']
    else:
        msg = error_data

    res_data = {
        "code": status.HTTP_422_UNPROCESSABLE_ENTITY,
        "message": f"数据校验错误 {msg}",
        "data": None
    }
    logger.error(exc.errors())
    return JSONResponse(res_data)