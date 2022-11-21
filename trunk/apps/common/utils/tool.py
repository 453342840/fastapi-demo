import hashlib
import uuid
from xml.etree import ElementTree

def random_str() -> str:
    """生成uuid"""
    return hashlib.md5(str(uuid.uuid1()).encode(encoding='UTF-8')).hexdigest()

def parse_xml(data: bytes) -> dict:
    """解析xml"""
    result = {}
    xml_root = ElementTree.fromstring(data)
    for child in list(xml_root):
        result[child.tag] = child.text
    return result

def make_xml(data, root=None) -> dict:
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