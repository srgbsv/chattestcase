<?php

use Illuminate\Database\Seeder;

class ChatMessageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('chat_messages')->insert([
            [
                'chat_id' => 1,
                'from' => 2,
                'read' => true,
                'msg' => 'Привет!',
                'created_at' => DB::raw('NOW()'),
                'updated_at' => DB::raw('NOW()')
            ],
            [
                'chat_id' => 1,
                'from' => 2,
                'read' => true,
                'msg' => 'Как дела?',
                'created_at' => DB::raw('NOW()'),
                'updated_at' => DB::raw('NOW()')
            ],
        ]);
    }
}
