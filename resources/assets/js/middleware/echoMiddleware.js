import Echo from 'laravel-echo'
import {
  ECHO_CONNECT,
  ECHO_ADD_LISTENER,
  ECHO_REMOVE_LISTENER
} from '../constants/EchoEventTypes.js';


window.io = require('socket.io-client');

var EchoListener;

/**
 * An example middleware to handle WebSocket connections.
 * NB: There is no exception handling!
 */
export const echoMiddleware = store => next => action => {
  switch (action.type) {
    // User request to connect
    case 'ECHO_CONNECT':
      console.log('dispatch ECHO_CONNECT');
      // Configure the object
      EchoListener = new Echo({
        broadcaster: 'socket.io',
        host: window.location.hostname+':6001'
      });
      break;

    case ECHO_ADD_LISTENER:
      EchoListener.channel(action.channel).listen(action.event, (e) => {
        store.dispatch(action.payload);
      });
      break;

    case ECHO_REMOVE_LISTENER:
      EchoListener.leave(action.channel);
      break;

    default: // We don't really need the default but ...
      break;
  }

  return next(action);
};
