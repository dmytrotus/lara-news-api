<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use App\Models\Post;
use Carbon\Carbon;

class NewsApiService
{
    public $sources = 'engadget, associated-press, reuters'; // , associated-press, reuters, financial-times
    public $pageNr = 1;
    public $pageSize = 20;
    public $from = null;
    public $to = null;

    public function __construct()
    {
        $this->from = Carbon::today()->subDays(7)->format('Y-m-d');
        $this->to = Carbon::today()->format('Y-m-d');
    }

    private function fetchFromApi(): array
    {
        return Http::get('https://newsapi.org/v2/everything?' .
            'sources=' . $this->sources .
            '&page=' . $this->pageNr .
            '&pageSize=' . $this->pageSize .
            '&from=' . $this->from .
            '&to=' . $this->to .
            '&apiKey=' . config('newsapi.newsapi'))
            ->json();
    }

    private function saveArticlesToDb($json): void
    {
        $articles = $json['articles'] ?? null;
        if (!$articles) {
            return;
        }

        if (count($articles) > 0) {
            foreach ($articles as $article) {
                if ($this->hasCopyInDb($article)) {
                    continue;
                }
                Post::create([
                    'main_source' => 'newsapi',
                    'source' => $article['source']['name'],
                    'author' => $article['author'],
                    'title' => $article['title'],
                    'description' => $article['description'],
                    'url' => $article['url'],
                    'url_to_image' => $article['urlToImage'],
                    'content' => $article['content']
                ]);
            }
        }
    }

    public function syncPosts(): void
    {
        $json = $this->fetchFromApi();
        $this->saveArticlesToDb($json);

        $countOfPages = (int) ceil($json['totalResults'] / $this->pageSize);
        if ($countOfPages > 1) {
            // skip first page becasuse already saved to database
            for ($i = 2; $i <= $countOfPages; $i++) {
                $this->pageNr = $i;
                $json = $this->fetchFromApi();
                $this->saveArticlesToDb($json);
            }
        }
    }

    private function hasCopyInDb(array $article): bool
    {
        $posts = Post::where('source', $article['source']['name'])->get();
        if ($posts->isEmpty()) {
            return false;
        }

        $copies = $posts->filter(function ($item) use ($article) {
            return $item['url'] === $article['url'];
        });
        if ($copies->isNotEmpty()) {
            return true;
        }

        return false;
    }
}
