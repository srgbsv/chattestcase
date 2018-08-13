<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Log;
use DB;

class Chat extends Model
{
    /**
     * @param $userId integer User identifier
     *
     * @return array List of chats
     */
    public static function getChats($userId)
    {
        try {
            $r = DB::select('
                    SELECT c.id, u1.name as name1, u2.name as companion_name,
                      (SELECT cm.msg FROM chat_messages cm
                       WHERE cm.chat_id=c.id
                       ORDER BY cm.created_at LIMIT 1) as last_msg,
                       (SELECT cm.created_at FROM chat_messages cm
                       WHERE cm.chat_id=c.id
                       ORDER BY cm.created_at LIMIT 1) as last_msg_date,
                      c.uid1 as uid1, c.uid2 as companion_id
                    FROM chats c
                    INNER JOIN users as u1
                    ON u1.id = c.uid1
                    LEFT JOIN users as u2
                    ON u2.id = c.uid2
                    WHERE u1.id = ?
                    UNION
                    SELECT c.id, u2.name as name1, u1.name as companion_name,
                      (SELECT cm.msg FROM chat_messages cm
                       WHERE cm.chat_id=c.id
                       ORDER BY cm.created_at LIMIT 1) as last_msg,
                       (SELECT cm.created_at FROM chat_messages cm
                       WHERE cm.chat_id=c.id
                       ORDER BY cm.created_at LIMIT 1) as last_msg_date,
                      c.uid2 as uid1, c.uid1 as companion_id
                    FROM chats c
                    INNER JOIN users as u2
                    ON u2.id = c.uid2
                    LEFT JOIN users as u1
                    ON u1.id = c.uid1
                    WHERE u2.id = ?', [$userId, $userId]);
            return $r;
        } catch (\PDOException $e) {
            Log::error($e->getMessage());
            return [];
        }
    }

    /**
     * Return information about chat
     *
     * @param $userId user requesting information
     *
     * @return object
     */
    public function getChatMeta($userId) {
        if ($this->uid1 == $userId) {
            $this->companion = User::find($this->uid2);
        } else {
            $this->companion = User::find($this->uid1);
        }
        return $this;
    }

    /**
     * Relation for Chat ->> Chat messages
     */
    public function messages() {
        return $this->hasMany('App\ChatMessage', 'chat_id');
    }
}
