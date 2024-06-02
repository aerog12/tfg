<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller


{
    public  function user() {
        return Auth::user();
    }

    public function registro(Request $request){
        return User::create([
            "name" => $request->input("name"),
            "email"=> $request->input("email"),
            "password"=> Hash::make($request->input("password")),
        ]);
        
    }

    public function login(Request $request){
        $credenciales= $request -> only(["email","password"]);
        if (!Auth::attempt($credenciales)){
            return response() -> json([
                "mensaje" => "Credenciales incorrectas" 
            ], 401);
        }
        $token = Auth::user() -> createToken('auth_token') -> plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24);
        return response([
            'mensaje' => 'exito'
        ], 200) -> withCookie($cookie);
    }

    public function cerrarSesion(Request $request){
        $cookie= Cookie::forget('jwt');
        return response([
            'mensaje' => 'cerrado'
        ], 200) -> withCookie($cookie);
    }


}