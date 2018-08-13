import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
import Layout from './Layout';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import ChatList from './ChatList';
import ChatPage from './ChatPage';


const Root = ({ store, page }) => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/chats" component={ChatList} />
        <Route path="/chat/:id" component={ChatPage} />
      </Layout>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root