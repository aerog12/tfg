<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function registro(Request $request)
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

    public function login(Request $request)
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
