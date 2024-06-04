<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
   protected $model = User::class;

   public function definition():array{
        return [
            'name'=> 'nombre'. random_int(0,1000),
            'email' => 'email'. random_int(0,1000),
            'password'=> Hash::make('password'),
        ];
   }
}
