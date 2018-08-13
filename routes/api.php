<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user/', 'UserController@getUser');
Route::get('/friends', 'UserController@getUserFriends');
Route::get('/chats', 'ChatController@getUserChats');
Route::get('/chat/{chat_id}', 'ChatController@getChat');
Route::put('/chat/{chat_id}/msg', 'ChatController@addMsgToChat');
Route::get('/chat/{chat_id}/history', 'ChatController@getChatHistory');

Route::group(['middleware' => ['loginapi']], function () {
    Route::post('/login/', 'LoginController@login');
});
