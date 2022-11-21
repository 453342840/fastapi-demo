# trunk

## Tortoise-orm + aerich 更新数据库
参考：https://zhuanlan.zhihu.com/p/567431976
```
1. aerich init -t apps.common.databases.mysql.mysql_config
2. aerich init-db
// 如果models改变
3. aerich migrate --name change
4. aerich upgrade
(注意：在compose中运行，需加前缀：docker-compose exec [service] [cmd])
```

## 如何重启服务？
```
1. 如果images需要更新：
docker compose up -d --build
此时会识别出有更新的image并重新构建

2. 如果仅仅是重启
docker compose reatart [app_name]
```