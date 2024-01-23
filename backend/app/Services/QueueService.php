<?php

namespace App\Services;

use App\Mail\TestMessage;
use Illuminate\Support\Facades\Mail;

class QueueService
{
    public function __invoke()
    {
        Mail::to('someemail@example.com')->queue(new TestMessage('Some test e-mail'));
        return 'sent';
    }
}
