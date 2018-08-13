<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->get('/login', function() {
    return view('layout');
})->name('login');

Route::middleware('auth')->get('/{path?}/{path2?}', function () {
    return view('layout');
});

