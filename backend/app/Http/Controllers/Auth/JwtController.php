<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Cookie;

class JwtController extends Controller
{
    public function logout(Request $request): JsonResponse
    {
        $accessToken = $request->cookie('accessToken');
        auth('api')->setToken($accessToken)->invalidate();

        $response = response()->json(['message' => 'ok'], 200);

        $response->withCookie(
            Cookie::forget('accessToken')
        );

        $response->withCookie(
            Cookie::forget('accessTokenExpires')
        );

        return $response;
    }
}
