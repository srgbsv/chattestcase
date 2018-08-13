import React, { Component, PropTypes } from 'react'
import LoginForm from '../LoginPage/LoginForm.js'
import MainMenu from './MainMenu.js'

export default class SideBar extends Component{
  static propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.object
  };

  static defaultProps = {
    user: null
  };

  render = () => {
    const {user, actions, onChangeRoute, curPath, msg} = this.props;
    return (
      <div id="side_bar" className="side_bar fl_l sticky_top" style={{top: '0px'}}>
        <div id="side_bar_inner" className="side_bar_inner">
          {user?
            !user.isLogin?
              <LoginForm
                user={user}
                msg={msg}
                onLogin={actions.login}
                />
              :
              <MainMenu
                curPath={curPath}
                onChangeRoute={onChangeRoute}
                />
            : null
          }
        </div>
      </div>
    )
  };

}
