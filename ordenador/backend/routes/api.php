<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post("registro", [AuthController::class, "registro"]);
Route::post("login", [AuthController::class, "login"]);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('cerrarSesion', [AuthController::class, 'cerrarSesion']);
    Route::get('usuario', [AuthController::class, 'user']);
    Route::delete('usuario/{id}', [AuthController::class, 'eliminarUsuario']);
    Route::get('usuarios', [AuthController::class, 'obtenerUsuarios']);
    Route::get('mis-datos',[AuthController::class,'misDatos']);
    Route::post('usuario/actualizar', [AuthController::class, 'actualizarDatos']);
});

