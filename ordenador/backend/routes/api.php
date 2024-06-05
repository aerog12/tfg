<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::post("registro",[AuthController::class, "registro"]);
Route::post("login",[AuthController::class, "login"]);

Route::middleware('auth:sanctum') -> group(function () {
  // Route::post('/actualizar-perfil', 'AuthController@actualizarPerfil')->middleware('auth');
  Route::post('cerrarSesion', [AuthController::class, 'cerrarSesion']);
  Route::get('usuario', [AuthController::class, 'user']);
});

