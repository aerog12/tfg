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
    public function user() {
        return response()->json(Auth::user());
    }

    public function registro(Request $request){
        return User::create([
            "name" => $request->input("name"),
            "email"=> $request->input("email"),
            "password"=> Hash::make($request->input("password")),
        ]);
    }

    public function login(Request $request)
    {
        $credenciales = $request->only(['email', 'password']);
        if (!Auth::attempt($credenciales)) {
            return response()->json([
                'mensaje' => 'Credenciales incorrectas'
            ], 401);
        }
        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24);
        return response([
            'mensaje' => 'exito',
            'token' => $token
        ], 200)->withCookie($cookie);
    }

    public function cerrarSesion(Request $request){
        $cookie= Cookie::forget('jwt');
        return response([
            'mensaje' => 'cerrado'
        ], 200)->withCookie($cookie);
    }

    public function obtenerUsuarios() {
        $usuarioAutenticado = Auth::user();

        if ($usuarioAutenticado->email !== 'admin@admin') {
            return response()->json(['mensaje' => 'No autorizado'], 403);
        }

        $usuarios = User::all();
        return response()->json($usuarios, 200);
    }
    //funcion para actualizar los campos de los usuarios
    public function actualizarDatos(Request $request) {
    $usuarioAutenticado = Auth::user();
    $data = $request->only(['name', 'apellido1', 'apellido2', 'email', 'movil']);

    $usuarioAutenticado->update($data);

    return response()->json(['mensaje' => 'Datos actualizados', 'usuario' => $usuarioAutenticado], 200);
}


    // funcion para que el admin pueda eliminar usuarios
    public function eliminarUsuario($id) {
        $usuarioAutenticado = Auth::user();

        if ($usuarioAutenticado->email !== 'admin@admin') {
            return response()->json(['mensaje' => 'No autorizado'], 403);
        }

        $usuario = User::find($id);
        if ($usuario) {
            $usuario->delete();
            return response()->json(['mensaje' => 'Usuario eliminado'], 200);
        }
        return response()->json(['mensaje' => 'Usuario no encontrado'], 404);
    }

    public function misDatos(){
        return Auth::user();
    }
}
