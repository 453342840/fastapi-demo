import asyncio
from common.databases.mysql import AioMysql
from common.models.user import Menu, User

# 图标地址：https://icones.js.org/collection/icon-park-outline
async def main():
    async with AioMysql.excete():
        d = dict(parent_id=0, title='首页', name='home', icon='icon-park-outline:home-two', is_menu=True, sort=0)
        await Menu.update_or_create(d, id=1)

        d = dict(parent_id=0, title='系统管理', name='system', icon='icon-park-outline:setting-computer', is_menu=True, sort=1)
        await Menu.update_or_create(d, id=2)

        d = dict(parent_id=2, title='用户管理', name='system_user', icon='carbon:menu', is_menu=True, sort=0)
        await Menu.update_or_create(d, id=3)

if __name__ == '__main__':
    asyncio.run(main())

# env PYTHONPATH=. python ./script/init_menu.py


