# Project news-api Built with Laravel + ReactJs

There are 2 separate folders. Inside backend we have Laravel app, inside frontend-react we have reactJs Single Page App.

## How to start the project 

```js
docker compose up -d --build
```

Then in browser please open 
```js
http://localhost:4173/
```
## The project uses newsAPI

The project uses https://newsapi.org/ API. 
For the correct operation of the program you need to make free account on https://newsapi.org/
and get free API key. Then you need to set the token in .env file

```js
NEWSAPI_TOKEN=your_token
```
After that you can retrieve the news from api manually 
```js
php artisan app:sync-news
```
Or if you set the cron job, news will be fetched automatically every day at 8 am

## What else need to do inside the project
- blog pagination
- improve auth via jwt token 
- add user page with settings and news preferrences
- add login/register error handlers