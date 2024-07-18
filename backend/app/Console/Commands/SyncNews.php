<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\NewsApiService;

class SyncNews extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:sync-news';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public function __construct(
        public NewsApiService $newsApiService
    ) {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->newsApiService->syncPosts();
    }
}