import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers/main'
import Root from './containers/Root'
import { setPusherClient } from 'react-pusher';
import Pusher from 'pusher-js';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const pusherClient = new Pusher(
  'ef454da512507e6333f1',
  {
    cluster: 'eu',
    encrypted: true
  }
);

setPusherClient(pusherClient);

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

render(
  <Root
    store={store}
    />,
  document.getElementById('page_wrap')
);