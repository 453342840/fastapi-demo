service ?= ''
env ?= 'dev'

log:
	@docker compose logs -t -f -n 30 $(service)

# 本地启动
run:
	@echo ">> 正在执行后台启动..."
	@docker compose --env-file envs/$(env).env -f docker/docker-compose.yml down && docker compose --env-file envs/$(env).env -f docker/docker-compose.yml up -d & docker image prune

run-build:
	@echo ">> 正在重新构建..."
	@docker compose --env-file envs/$(env).env -f docker/docker-compose.yml down && docker compose --env-file envs/$(env).env -f docker/docker-compose.yml up -d --build & docker image prune

restart:
	@echo ">> 正在重启服务..."
	@docker compose --env-file envs/$(env).env -f docker/docker-compose.yml restart $(service)

db:
	@echo ">> 正在执行后台启动..."
	@docker compose --env-file envs/$(env).env -f docker/docker-compose-db.yml  down && docker compose --env-file envs/$(env).env -f docker/docker-compose-db.yml up -d & docker image prune


kafka-cluster:
	@echo ">> 正在执行后台启动..."
	@docker compose --env-file envs/$(env).env -f docker/docker-compose-kafka-cluster.yml down && docker compose --env-file envs/$(env).env -f docker/docker-compose-kafka-cluster.yml up -d & docker image prune