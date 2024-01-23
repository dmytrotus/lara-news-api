<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\RabbitMQService;

class RabbitMQController extends Controller
{
    public function publishMessage(Request $request)
    {
        if ($request->has('m')) {
            $message = $request->input('m');
        } else {
            $message = 'Test message';
        }

        $rabbitMQService = new RabbitMQService();
        $rabbitMQService->publish($message);

        return response('Message published to RabbitMQ');
    }

    public function consumeMessage()
    {
        return 'works only from console...';

        $rabbitMQService = new RabbitMQService();

        $callback = function ($msg) {
            echo "Received message: " . $msg->body . "\n";
        };

        $rabbitMQService->consume($callback);
    }
}
