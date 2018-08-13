<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Auth;

use App\User;

use App\Http\Controllers\Controller;

class UserController extends Controller
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
     * Get usr information
     *
     * @return \Illuminate\Http\Response
     */
    public function getUser(Request $request)
    {
        return response()->json([
            'error' => 0,
            'user' => Auth::user()
        ]);
    }

    public function getUserFriends(Request $request)
    {
        $user = Auth::user();
        return response()->json(['error' => 0, 'data'=>$user->friends]);
    }
}
