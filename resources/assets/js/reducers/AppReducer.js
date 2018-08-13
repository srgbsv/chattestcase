import {
  REQUEST_USER,
  RECEIVE_USER,
  START_LOGIN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  REQUEST_FRIENDS,
  RECEIVE_FRIENDS,
  REQUEST_CHATS,
  RECEIVE_CHATS,
  REQUEST_CHAT,
  RECEIVE_CHAT,
  REQUEST_CHAT_HISTORY,
  RECEIVE_CHAT_HISTORY
} from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  msg: '',
  user: null,
  friends: [],
  chats:[],
  chat: {
    companion: {
      id:-1,
        name: 'John Dow'
    }
  },
  chatHistory:[],
  path: '/login'
};

export default function appReducer(state = initialState, action=null) {
  switch (action.type) {

    case REQUEST_USER:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        user: action.user
      };

    case REQUEST_FRIENDS:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_FRIENDS:
      return {
        ...state,
        isFetching: false,
        friends: action.friends
      };

    case REQUEST_CHATS:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_CHATS:
      return {
        ...state,
        isFetching: false,
        chats: action.chats
      };
    case REQUEST_CHAT:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_CHAT:
      return {
        ...state,
        isFetching: false,
        chat: action.chat
      };

    case REQUEST_CHAT_HISTORY:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_CHAT_HISTORY:
      return {
        ...state,
        isFetching: false,
        chatHistory: action.history
      };

    case START_LOGIN:
      return {
        ...state,
        isFetching: true
      };

    case SUCCESS_LOGIN:
      return {
        ...state,
        user: action.user,
        isFetching: false,
        msg: ''
      };

    case FAIL_LOGIN:
      return {
        ...state,
        isFetching: false,
        user: {
          isLogin: false
        },
        msg: action.msg
      };
    default:
      return state;
  }
}


