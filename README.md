# 说明
本demo全由个人设计搭建，基于FastAPI，封装了AioMysql、AioRedis、AioScheduler、AioKafka等多种中间件。
并且集成了管理系统（前端源码需要请联系提供），实现了简单的登录功能。

## 服务启动
```
1. 启动web服务
make run [env=dev|test|pro]

2. 启动中间件
make db [env=dev|test|pro]

3. 初始化数据库表（只需第一次执行，注意：需要在docker容器user中执行）
aerich init -t common.databases.mysql.mysql_config
aerich init-db

4. 初始化菜单（注意：需要在docker容器user中执行）
env PYTHONPATH=. python ./script/init_menu.py
```
启动后浏览器输入：http://127.0.0.1/admin 即可进入后台系统 (默认验证码：888888)

启动后浏览器输入：http://127.0.0.1/docs/user 即可查看对应的接口文档 

# 测试用例
本demo采用pytest 和 pytest-cov 实现单元测试和覆盖率查询

初始化配置：conftest.py文件  
pytest配置：pytest.ini

测试用例编写方式：在不同app下创建tests文件夹，以test_开头创建.py文件
可参考apps/user/tests/test_user_api.py

如何执行？（注意：需要在docker容器user中执行）
```
pytest
```

# 数据库更新说明
参考：https://zhuanlan.zhihu.com/p/567431976
技术栈：Tortoise-orm + aerich
```
MYSQL数据模型初始化与更新
// 初始化：初始化数据库并创建models
1. aerich init -t common.databases.mysql.mysql_config
2. aerich init-db

// 更新：如果models有更改，执行以下1、2
1. aerich migrate --name change
2. aerich upgrade
(另外：可直接在终端执行：docker-compose exec [service] [cmd])
```