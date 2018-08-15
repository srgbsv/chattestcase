import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { echoMiddleware } from './middleware/echoMiddleware.js'
import createLogger from 'redux-logger'
import reducer from './reducers/main'
import Root from './containers/Root'


const middleware = [ thunk, echoMiddleware ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

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