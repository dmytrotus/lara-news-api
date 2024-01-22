<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Cookie;

class RefreshJwtToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        if (!$request->cookie('accessToken')) {
            return $response;
        }

        if ((int) $request->cookie('accessTokenExpires') <= time()) {
            $accessToken = $request->cookie('accessToken');
            $token = auth('api')->setToken($accessToken)->refresh();

            $response->withCookie(
                Cookie::make('accessToken', $token, $minutes = 60, $path = null, $domain = config('app.frontend_origin'), $secure = true, $httpOnly = true)
            );

            $response->withCookie(
                Cookie::make('accessTokenExpires', $tokenExpires = time() + config('jwt.ttl') * 60, $minutes = 60, $path = null, $domain = config('app.frontend_origin'), $secure = true, $httpOnly = true)
            );
        }

        return $response;
    }
}
