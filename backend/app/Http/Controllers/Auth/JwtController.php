<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Tymon\JWTAuth\Exceptions\JWTException;

class JwtController extends Controller
{
    public function refreshToken(Request $request): JsonResponse
    {
        try {
            $token = auth('api')->refresh();
        } catch (JWTException $e) {
            return response()->json([
                'message' => 'original token is not valid',
                'token' => null,
            ], 400);
        }

        return response()->json([
            'message' => 'token refreshed',
            'token' => $token,
        ]);
    }
}
