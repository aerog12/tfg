<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post("registro",[AuthController::class, "registro"]);
Route::post("login",[AuthController::class, "login"]);

Route::middleware('auth:sanctum') -> group(function () {
  Route::get('usuario', [AuthController::class, 'user']);
  Route::post('cerrarSesion', [AuthController::class, 'cerrarSesion']);
});