import * as types from '../constants/ActionTypes';
import {push} from 'react-router-redux'
import {
  ECHO_CONNECT,
  ECHO_ADD_LISTENER,
  ECHO_REMOVE_LISTENER
} from '../constants/EchoEventTypes.js';

export const getUser = () => dispatch => {
  dispatch(requestUser());
  return fetch('/api/user', {credentials: 'include'})
    .then(resp => resp.json())
    .then(resp => dispatch(receiveUser(resp)));
};

export const requestUser = () => ({
  type: types.REQUEST_USER,
  isFetching: true
});

export const receiveUser = (resp) => {
  if (resp.error != 0) {
    return {
      type: types.RECEIVE_USER,
      isFetching: false,
      user: {
        isLogin: false
      }
    }
  } else {
    resp.user.isLogin = true;
    return {
      type: types.RECEIVE_USER,
      isFetching: false,
      user: resp.user
    }
  }
};

export const loginStart = () => ({
  type: types.START_LOGIN
});

export const loginEnd = (resp) => {
  if (resp.error == 0) {
    resp.user.isLogin = true;
    return {
      type: types.SUCCESS_LOGIN,
      user: resp.user
    }
  } else {
    return {
      type: types.FAIL_LOGIN,
      msg: resp.msg
    }
  }
};

export const changeRoute = (history, path) => dispatch => {
  history.push(path);
};

export const login = (login, pass, remember) => dispatch => {
  dispatch(loginStart());
  const data = JSON.stringify({
    email: login,
    password: pass,
    remember
  });
  return fetch('/api/login', {
    headers: {
      'X-CSRF-Token': document.querySelector("meta[name='csrf-token']")?document.querySelector("meta[name='csrf-token']").getAttribute('content'):'',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: data
  })
    .then(resp => resp.json())
    .then(resp => dispatch(loginEnd(resp)));
};

export const requestFriends = () => ({
  type: types.REQUEST_FRIENDS
});

export const receiveFriends = (resp) => ({
  type: types.RECEIVE_FRIENDS,
  friends: resp.data
});

export const fetchFriends = (userId) => dispatch => {
  dispatch(requestFriends());
  fetch('/api/friends')
    .then(resp => resp.json())
    .then(resp => dispatch(receiveFriends(resp)))
};

const requestChats = () => ({
  type: types.REQUEST_CHATS
});

const receiveChats = (resp) => ({
  type: types.RECEIVE_CHATS,
  chats: resp.data
});

export const fetchChats = (userId) => dispatch => {
  dispatch(requestChats());
  fetch('/api/chats')
    .then(resp => resp.json())
    .then(resp => dispatch(receiveChats(resp)))
};

export const openChat = (history, chatId) => dispatch => {
  history.push('/chat/'+chatId);
};

const requestChat = (chatId) => ({
  type: types.REQUEST_CHAT,
  id: chatId
});

export const receiveChat = (resp) => ({
  type: types.RECEIVE_CHAT,
  chat: resp.data
});

export const fetchChat = (chatId) => dispatch => {
  dispatch(requestChat(chatId));
  fetch('/api/chat/'+chatId)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp);
      if (resp.error == 0) {
        dispatch(fetchChatHistory(chatId));
      }
      return dispatch(receiveChat(resp));
    });
};

const requestChatHistory = (chatId) => ({
  type: types.REQUEST_CHAT_HISTORY,
  id: chatId
});

const receiveChatHistory = (resp) => ({
  type: types.RECEIVE_CHAT_HISTORY,
  history: resp.data
});

export const fetchChatHistory = (chatId) => dispatch => {
  dispatch(requestChatHistory(chatId));
  fetch('/api/chat/'+chatId+'/history/')
    .then(resp => resp.json())
    .then(resp => dispatch(receiveChatHistory(resp)));
};

export const backToChats = (history) => dispatch => {
  history.push('/chats');
};

const startMsgSending = () => ({
  type: types.START_MSG_SENDING
});

const endMsgSending = (resp) => ({
  type: types.END_MSG_SENDING
});

export const sendChatMsg = (chatId, msg) => dispatch => {
  if (msg) {
    fetch('/api/chat/' + chatId + '/msg', {
      headers: {
        'X-CSRF-Token': document.querySelector("meta[name='csrf-token']") ? document.querySelector("meta[name='csrf-token']").getAttribute('content') : '',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        msg
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        endMsgSending(resp);
      });
  }
};

export const startMiddleware = () => dispatch => {
  dispatch({type: ECHO_CONNECT});
};

export const addEchoListener = (channel, event, payload) => dispatch => {
  dispatch({
    type: ECHO_ADD_LISTENER,
    channel: channel,
    event: event,
    payload: payload
  });
};

export const removeEchoListener = (channel) => dispatch => {
  dispatch({
    type: ECHO_REMOVE_LISTENER,
    channel: channel
  });
};

