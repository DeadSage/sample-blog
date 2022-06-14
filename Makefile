clean:
	@make -s down
	@docker rmi sample-blog_postgres_1 sample-blog_app_1 sample-blog-front-1
	@docker images -q -f dangling=true | xargs docker rmi -f

up:
	@docker compose up -d --remove-orphans

build:
	@docker compose build

down:
	@docker compose down

run:
	@make -s build
	@make -s up

restart:
	@make -s down
	@make -s up

cmm:
	@make -s collectstatic
	@make -s makemigrations
	@make -s migrate

shell:
	@docker compose exec app python manage.py shell

ps:
	@docker compose ps

bash:
	@docker compose exec app bash

test:
	docker compose  exec app ./manage.py test

# If the first argument is "logs"...
ifeq (logs,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "logs"
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(RUN_ARGS):;@:)
endif
logs:
	@docker compose logs -f $(RUN_ARGS)

collectstatic:
	@docker compose exec app python manage.py collectstatic --noinput

migrate:
	@docker compose exec app python manage.py migrate

makemigrations:
	@docker compose exec app python manage.py makemigrations

rm-volume:
	@make -s down
	@docker volume rm sample-blog_postgres_data

# prod:
# 	@docker compose -f prod.yml down
# 	@sudo -u user git pull origin master
# 	@docker compose -f prod.yml build
# 	@docker compose -f prod.yml up -d
# 	@echo "Sleeping for 10 seconds"
# 	@sleep 10
# 	@docker compose -f prod.yml exec app python manage.py migrate
# 	@docker compose -f prod.yml exec app python manage.py collectstatic --noinput
