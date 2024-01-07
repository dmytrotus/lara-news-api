<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PostController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([1,2,3,4,5,6,7,8], 200);
    }
}
