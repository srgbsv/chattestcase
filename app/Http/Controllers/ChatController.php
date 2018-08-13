<?php

namespace App\Http\Controllers;

use App\ChatMessage;
use Illuminate\Http\Request;
use Auth;
use Log;

use App\Chat;
use App\Http\Controllers\Controller;
use App\Events\ChatUpdate;

class ChatController extends Controller
{
    /**
     * Create a new controller instance.
     *
     */
    public function __construct()
    {
        $this->middleware('authapi');
    }

    /**
     * Return user chats.
     *
     * @param $request Request
     *
     * @return JSON response
     */
    public function getUserChats(Request $request)
    {
        $user = Auth::user();
        return response()->json(['error' => 0, 'data'=> Chat::getChats($user->id)]);
    }

    /**
     * Return user chat information respect requesting userId
     *
     * @param $request Request
     * @param $chat_id integer chat identifier
     */
    public function getChat(Request $request, $chat_id)
    {
        $user = Auth::user();
        $chat = Chat::find($chat_id);
        if (!$chat) {
            return response()->json(['error' => 404, 'msg' => 'Chat not found'], 404);
        } else if ($chat->uid1 != $user->id && $chat->uid2 != $user->id) {
            return response()->json(['error' => 403, 'msg' => 'Forbidden'], 403);
        }
        return response()->json(['error'=>0, 'data'=>$chat->getChatMeta($user->id)]);
    }

    /**
     * Return user chat information respect requesting userId
     *
     * @param $request Request
     * @param $chat_id integer chat identifier
     */
    public function getChatHistory(Request $request, $chat_id)
    {
        $user = Auth::user();
        $chat = Chat::find($chat_id);
        if (!$chat) {
            return response()->json(['error' => 404, 'msg' => 'Chat not found'], 404);
        } else if ($chat->uid1 != $user->id && $chat->uid2 != $user->id) {
            return response()->json(['error' => 403, 'msg' => 'Forbidden'], 403);
        }
        return response()->json(['error'=>0, 'data'=>$chat->messages]);
    }

    /**
     * Add msg to chat
     * @param $request Request
     * @param $chat_id
     */
    public function addMsgToChat(Request $request, $chat_id) {
        $user = Auth::user();
        $chat = Chat::find($chat_id);
        if (!$chat) {
            return response()->json(['error' => 404, 'msg' => 'Chat not found'], 404);
        } else if ($chat->uid1 != $user->id && $chat->uid2 != $user->id) {
            return response()->json(['error' => 403, 'msg' => 'Forbidden'], 403);
        }
        $msg = $request->input('msg', '');
        if ($msg) {
            $msg_model = new ChatMessage();
            $msg_model->chat_id = $chat_id;
            $msg_model->msg = $msg;
            $msg_model->from = $user->id;
            try {
                $msg_model->save();
                event(new ChatUpdate($chat));
                return response()->json(['error' => 0, 'msg' => 'OK']);
            } catch(\ErrorException $e) {
                Log::debug($e->getMessage());
                return response()->json(['error' => 500, 'msg' => 'Msg has not been added'], 500);
            }
        }
        return response()->json(['error' => 500, 'msg' => 'Msg has not been added'], 500);
    }
}
