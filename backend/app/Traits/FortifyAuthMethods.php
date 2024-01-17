<?php

namespace App\Traits;

use Laravel\Fortify\Fortify;
use Illuminate\Http\Request;
use App\Models\User;
use JWTAuth;

trait FortifyAuthMethods
{
    private function responseWithTokenViaTymonJwtAuth(Request $request)
    {
        $jwtToken = auth('api')->attempt([
                    'email' => $request->email,
                    'password' => $request->password,
                ]);
        $tokenExpires = time() + config('jwt.ttl') * 60;

        return $request->wantsJson()
        ? response()->json([
            'message' => 'User is logged in',
            'token' => $jwtToken,
            'token_expires' => $tokenExpires,
        ], 200)
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
