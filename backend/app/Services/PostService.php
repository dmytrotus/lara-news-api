<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use App\Models\Post;
use Illuminate\Pagination\LengthAwarePaginator;

class PostService
{
    public function getPosts(): LengthAwarePaginator
    {
        return Post::orderBy('id', 'DESC')->paginate(50);
    }
}
