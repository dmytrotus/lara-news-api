<?php

namespace App\Traits;

use Laravel\Fortify\Fortify;
use Illuminate\Http\Request;
use App\Models\User;
use JWTAuth;
use Illuminate\Support\Facades\Cookie;

trait FortifyAuthMethods
{
    private function responseWithTokenViaTymonJwtAuth(Request $request)
    {
        $jwtToken = auth('api')->attempt([
                    'email' => $request->email,
                    'password' => $request->password,
                ]);
        $tokenExpires = time() + config('jwt.ttl') * 60;
        $user = User::where('email', $request->email)->firstOrFail();

        $response = response()->json([
            'name' => $user->name,
            'id' => $user->id,
        ], 200);

        $response->withCookie(
            Cookie::make('accessToken', $jwtToken, $minutes = config('jwt.ttl') * 2, $path = null, $domain = config('app.frontend_origin'), $secure = true, $httpOnly = true)
        );

        $response->withCookie(
            Cookie::make('accessTokenExpires', $tokenExpires, $minutes = config('jwt.ttl'), $path = null, $domain = config('app.frontend_origin'), $secure = true, $httpOnly = true)
        );

        return $request->wantsJson()
        ? $response
        : redirect()->intended(Fortify::redirects('login'));
    }

    private function responseWithTokenViaSanctum(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        $user->tokens()->delete();
        return $request->wantsJson()
        ? response()->json([
            'message' => 'User is logged in',
            'token' => $user->createToken('api')->plainTextToken,
        ], 200)
        : redirect()->intended(Fortify::redirects('login'));
    }
}
