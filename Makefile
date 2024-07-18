bash-php:
	docker exec -it php-backend bash
migrate:
	docker exec -it php-backend bash -c "php artisan migrate"