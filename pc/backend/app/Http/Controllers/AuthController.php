<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function registro(AuthRequest $request)
    {
        $usuario = User::create([
            'name' => $request->input('name'),
            'email'=> $request->input('email'),
            'password'=> Hash::make($request->password)
        ]);
        
        $token = $usuario->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $usuario,
            'token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function login(AuthRequest $request)
    {
        $usuario = User::where('email', $request->email)->first();

        if (!$usuario || !Hash::check($request->password, $usuario->password)) {
            return response()->json([
                'message' => 'credenciales incorrectas'
            ], 401);
        }

        $token = $usuario->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'hola ' . $usuario->name,
            'token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function cerrarSesion()
    {
        auth()->user()->tokens()->delete();
        return response()->json(['message' => 'sesion cerrada']);
    }
}