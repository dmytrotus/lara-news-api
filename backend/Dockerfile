FROM php:8.2-fpm

RUN apt-get update && apt-get install -y zlib1g-dev g++ git libicu-dev zip libzip-dev zip \
    libpng-dev \
    libwebp-dev \
    libfreetype6-dev libjpeg62-turbo-dev\
    && docker-php-ext-install intl opcache pdo pdo_mysql \
    && pecl install apcu \
    && docker-php-ext-enable apcu

RUN docker-php-ext-configure gd --with-freetype --with-webp --with-jpeg && \
    docker-php-ext-install gd

WORKDIR /var/www/backend
RUN chown -R 33:33 /var/www/backend

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer