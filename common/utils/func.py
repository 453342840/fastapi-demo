import datetime
import math
import random
import string
import threading
import uuid
import hashlib
from typing import Optional
from xml.etree import ElementTree

from common.const import const


def sha1(message) -> str:
    sha1 = hashlib.sha1()
    # 数据需要先被编码为 bytes
    sha1.update(message.encode())
    hash_result = sha1.hexdigest()
    return hash_result


def uuid_str() -> str:
    """生成uuid"""
    return hashlib.md5(str(uuid.uuid1()).encode(encoding='UTF-8')).hexdigest()


def nonce_str(length=12, uppercase=False, special_char=False):
    """随机数字符串"""
    char = string.ascii_lowercase + string.digits
    if uppercase:
        char += string.ascii_uppercase
    if special_char:
        char += '@#$%^&*'
    return ''.join(random.choice(char) for _ in range(length))


def parse_xml(data: bytes) -> dict:
    """解析xml"""
    result = {}
    xml_root = ElementTree.fromstring(data)
    for child in list(xml_root):
        result[child.tag] = child.text
    return result


def make_xml(data: dict, root=None) -> Optional[bytes]:
    """构建xml"""
    return_result = False
    if root is None:
        root = ElementTree.Element('xml')
        return_result = True
    if type(data) is str:
        root.text = data
    elif type(data) is dict:
        for name, value in data.items():
            sub_root = ElementTree.SubElement(root, name)
            make_xml(value, sub_root)
    elif type(data) is list:
        for value in data:
            sub_root = ElementTree.SubElement(root, value[0])
            make_xml(value[1], sub_root)
    else:
        root.text = str(data)
    if return_result:
        return ElementTree.tostring(root, encoding='utf-8')


def singleton(cls):
    """单例装饰器"""
    _instance = {}
    _lock = threading.Lock()
    def _singleton(*args, **kargs):
        if cls not in _instance:
            with _lock:
                if cls not in _instance:
                    _instance[cls] = cls(*args, **kargs)
        return _instance[cls]
    return _singleton


def chinese_now():
    '''北京时间，格式：%Y-%m-%d %H:%M:%S'''
    datetime_format = '%Y-%m-%d %H:%M:%S'
    now_str = (datetime.datetime.utcnow() + datetime.timedelta(hours=8)).strftime(datetime_format)
    now_time = datetime.datetime.strptime(now_str, datetime_format)
    return now_time


def real_ip(request):
    # 优先读读取 X-Forwarded-For （客户端带上来的）
    ip = request.headers.get('X-Forwarded-For')
    if ip and ip.find(',') > -1:
        # 多个ip地址的话，取第一个（一般后面的是内部的服务器地址）
        ip = ip.split(',')[0]
    if not ip:
        ip = request.headers.get('Remoteip')
    if not ip:
        ip = request.headers.get('X-Real-Ip')
    if ip == '127.0.0.1':
        ip = request.headers.get('Api-Real-Ip') or ip
    return ip