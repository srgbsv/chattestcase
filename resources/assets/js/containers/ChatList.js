import React, { Component, PropTypes } from 'react'
import ChatItem from '../components/Chat/ChatItem.js'
import classNames from 'classnames';
import { withRouter } from 'react-router-dom'
import * as AppActions from '../actions/AppActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ChatList extends Component{
  static propTypes = {
    actions: PropTypes.object.isRequired,
    chats: PropTypes.array.isRequired
  };
  componentDidMount = () => {
    this.props.actions.fetchChats();
  };
  handleOpenChat = (chatId) => {
    const {actions, history} = this.props;
    actions.openChat(history, chatId);
  };
  render = () => {
    const {chats, actions} = this.props;
    return <div id="page_body" className="fl_r " style={{width: '795px'}}>
        <div id="header_wrap2">
          <div id="header_wrap1">
            <div id="header" style={{display: 'none'}}>
              <h1 id="title">false</h1>
            </div>
          </div>
        </div>
        <div id="wrap_between"></div>
        <div id="wrap3">
          <div id="wrap2">
            <div id="wrap1">
              <div id="content" >
                <div className="im-page-wrapper _im-page-wrap">
                  <div className="im-page js-im-page im-page_classic" style={{minHeight: '600px', height: 'auto'}}>
                    <div className="im-page--dialogs _im_page_dialogs page_block" style={{minHeight: '600px', position: 'static', top: '0px'}}>
                      <ul id="im_dialogs" className="im-page--dcontent ui_clean_list _im_page_dcontent">
                        {chats.map((chat) => <ChatItem
                            key={'chat'+chat.id}
                            chat={chat}
                            openChat={this.handleOpenChat}
                            /> )
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

const mapStateToProps = state => {
  const {user, chats} = state.appReducer;
  return {
    user,
    chats
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatList))
