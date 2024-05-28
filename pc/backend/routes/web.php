<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

// auth
Route::prefix('auth')->group(function () {
    Route::get('login', function(){
        return "Hola login";
    });

    Route::get('register', [AuthController::class,'register']);
   
});