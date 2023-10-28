from common.const.const import CODE_ERROR, CODE_SUCCESS


def base_response(code, msg, data=None):
    """基础返回格式"""
    if data is None:
        data = {}
    result = {
        "code": code,
        "message": msg,
        "data": data
    }
    return result


def success(data=None, msg=''):
    """成功返回格式"""
    return base_response(CODE_SUCCESS, msg, data)


def fail(msg='', data=None, code=CODE_ERROR):
    """失败返回格式"""
    return base_response(code, msg, data)
