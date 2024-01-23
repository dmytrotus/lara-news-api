<?php

use Illuminate\Support\Facades\Route;
use App\Services\QueueService;
use App\Http\Controllers\RabbitMQController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return 'Backend is working';
});

Route::get('/send-message-via-queue', QueueService::class);

Route::get('/rabbit-publish', [RabbitMQController::class, 'publishMessage']);
Route::get('/rabbit-consume', [RabbitMQController::class, 'consumeMessage']);
