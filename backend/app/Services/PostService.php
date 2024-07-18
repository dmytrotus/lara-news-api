<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use App\Models\Post;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;

class PostService
{
    public function getPosts(): LengthAwarePaginator
    {
        return Cache::remember("posts.all.firstpage", $seconds = 60, function () {
            return Post::orderBy('id', 'DESC')->paginate(50);
        });
    }
}
