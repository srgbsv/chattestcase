import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SideBar from '../components/BaseUI/SideBar'
import Header from '../components/BaseUI/Header'
import Footer from '../components/BaseUI/Footer'
import * as AppActions from '../actions/AppActions'
import { withRouter } from 'react-router-dom'

class Layout extends Component {
  static propTypes = {
    user: PropTypes.object,
    actions: PropTypes.object.isRequired
  };
  componentDidMount = () => {
    const {actions} = this.props;
    actions.getUser();
  };
  componentWillReceiveProps = (props) => {
    const {user, actions} = props;
    const path = props.location.pathname;
    if (path != '/login') {
      if (user) {
        if (!user.isLogin) {
          this.handleChangeRoute('/login');
        }
      }
    } else {
      if (!user) {
        actions.getUser();
      } else {
        if (user.isLogin) {
          console.log('ChangeRoute');
          this.handleChangeRoute('/');
        }
      }
    }
  };
  handleChangeRoute = (path) => {
    const {actions, history} = this.props;
    actions.changeRoute(history, path);
  };
  render() {
    const {
      user,
      msg,
      actions
      } = this.props;
      const curPath = this.props.location.pathname;
    return (
      <div>

        {/* Main Header */}
        <Header
          user={user}
          logout={actions.logout}
          />

        <div id="page_layout" style={{width: '960px'}}>
        {/* Left side column. contains the logo and sidebar */}
          <SideBar
            user={user}
            msg={msg}
            actions={actions}
            onChangeRoute={this.handleChangeRoute}
            curPath={curPath}
            />

          {this.props.children}

        <Footer />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

const mapStateToProps = state => {
  const {user, msg} = state.appReducer;
  return {
    msg,
    user
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))