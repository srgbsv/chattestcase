<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Джордан Уокер',
                'email' => 'jo@facebook.com',
                'password' => bcrypt('reactRulez'),
                'birthday' => '13.06.2013',
                'city' => 'Пало Альто',
                'country' => 'USA',
                'status' => 'Write once use everywhere'
            ],
            [
                'name' => 'Тэйлор Отвел',
                'email' => 'tay@laravel.com',
                'password' => bcrypt('laraWell'),
                'birthday' => '01.06.2011',
                'city' => 'Литл Рок',
                'country' => 'USA',
                'status' => 'You have arrived'
            ]]);
    }
}
