import asyncio
import sys

from apps.common.databases.mysql import AioMySQL
from apps.user.curd.user import add_user


async def main():
    username = 'rainy'
    password = '12345678'
    async with AioMySQL.excete():
        await add_user(username, password)


if __name__ == '__main__':
    asyncio.run(main())

# env PYTHONPATH=. python ./apps/script/fix_user.py
