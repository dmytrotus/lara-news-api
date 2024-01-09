<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Services\PostService;

class PostController extends Controller
{
    public function __construct(
        public PostService $postService
    ) {
    }

    public function index(): JsonResponse
    {
        return response()->json($this->postService->getPosts(), 200);
    }
}
