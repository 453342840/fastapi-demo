from typing import Optional
import pytest
from httpx import AsyncClient
from apps.user.main import app
from common.const import const
from common.depends.login_auth import login_require
from common.models.user import User
from common.utils.func import sha1


@pytest.fixture(scope="session")
async def client():
    async with AsyncClient(app=app, base_url='http://0.0.0.0/api/user') as client:
        print("Client is ready")
        yield client


# 覆盖所有需要登录依赖
async def override_login_require():
    data = {
        'nickname': '测试用户',
        'phone': '13488888888',
        'password': sha1('123456')
    }
    user = await User.get_or_create(defaults=data, username='test_user')
    return user

app.dependency_overrides[login_require] = override_login_require


@pytest.mark.anyio
async def test_info(client: AsyncClient):
    response = await client.get("/info")
    assert response.status_code == 200
    assert response.json()['code'] == const.CODE_SUCCESS


@pytest.mark.anyio
@pytest.mark.parametrize('id, data', [(100, {'username': 'xiaohong', 'nickname': '小红', 'phone': '13466666666'})])
async def test_info_id(client: AsyncClient, id, data):
    response = await client.put(f"/info/{id}", json=data)
    assert response.status_code == 200
    assert response.json()['code'] == const.CODE_SUCCESS


@pytest.mark.anyio
@pytest.mark.parametrize("username, nickname", [(None, None), ('123', None), (None, '小红')])
async def test_query(client: AsyncClient, username: Optional[str], nickname: Optional[str]):
    params = {
        'username': username,
        'nickname': nickname
    }
    response = await client.get("/query", params=params)
    assert response.status_code == 200
    assert response.json()['code'] == const.CODE_SUCCESS
