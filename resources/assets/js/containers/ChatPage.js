import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../actions/AppActions'
import MessageItem from '../components/Chat/MessageItem.js'
import Pusher from 'react-pusher';

class ChatList extends Component{
  static propTypes={
    chat:PropTypes.object,
    user:PropTypes.object,
    actions:PropTypes.object.isRequired
  };
  componentDidMount = () => {
    const {actions, id} = this.props;
    console.log(this.props.id);
    actions.fetchChat(this.props.id);
  };
  handleSendMsg = () => {
    const {actions, id} = this.props;
    const {msg} = this.state;
    if (msg) {
      actions.sendChatMsg(id, msg);
      this.setState({
        msg: ''
      });
    }
  };
  handleBackToChats = () => {
    const {actions, history} = this.props;
    actions.backToChats(history);
  };
  handleChangeMsg = (e) => {
    this.setState({
      msg: e.target.value
    })
  };
  handleChatUpdate=()=> {
    const {actions, id} = this.props;
    actions.fetchChatHistory(id)
  };
  handleKeyPressed=(e)=> {
    if (e.keyCode == 13) {
      this.handleSendMsg()
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    };
  };
  render = () => {
    const {user, chat, chatHistory, actions} = this.props;
    const {msg} = this.state;
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
            <div id="content" className="">
              <div className="im-page-wrapper _im-page-wrap">
                <div className="im-page js-im-page im-page_classic  im-page_history-show">
                  <div className="im-page--history page_block _im_page_history">
                    <div className="im-page-history-w">
                      <div className="im-page--chat-header _im_dialog_actions" style={{transform: 'unset'}}>
                        <div className="im-page--chat-header-in">
                          <div className="im-page--toolsw">
                            <div className="im-page--back">
                              <a className="im-page--back-btn _im_page_back" onClick={this.handleBackToChats}>Назад</a>
                            </div>
                            <div className="im-page--aside">
                              <div className="im-page--aside-photo">
                                <a className="_im_header_link" target="_blank">
                                  <div className="nim-peer  nim-peer_smaller">
                                    <div className="nim-peer--photo-w">
                                      <div className="nim-peer--photo">
                                        <div className="im_grid">
                                          <img src={'/img/avatars/user'+chat.companion.id+'.jpg'} alt="" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="im-page--title-wrapper">
                              <div className="im-page--title ">
                                <span className="im-page--title-main" title={chat.companion.name}>
                                  <span className="im-page--title-main-in">
                                    <a target="_blank" className="im-page--title-main-inner _im_page_peer_name">{chat.companion.name}</a>
                                      <span className="im-page--title-main-verified _im_chat_verified"></span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="im-page--chat-body">
                    <div className="im-page--chat-body-wrap _chat_body_wrap">
                      <div className="im-page--chat-body-abs _im_chat_body_abs" style={{minHeight: '600px', height: '600px', position: 'relative', top: '0px'}}>
                        <div className="im-page--chat-body-wrap-inner-2">
                          <div className="im-page--chat-body-wrap-inner _im_peer_history_w" style={{borderBottomWidth: '16px'}}>
                            <div className="_im_peer_history im-page-chat-contain"></div>
                            {chatHistory.map(msg => (
                              <MessageItem
                                msg={msg}
                                key={'msg'+msg.id}
                                author={msg.from == user.id?user:chat.companion}
                              />
                            ))}
                            <Pusher
                              channel={'chat.'+chat.id}
                              event={'App\\Events\\ChatUpdate'}
                              onUpdate={()=>{this.handleChatUpdate()}}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="im-page--chat-input _im_chat_input_w" style={{transform: 'unset', top: 'auto', position: 'relative', height: '40px', bottom: '0px', padding: '0px 30px', borderBottom: 'none'}}>
                      <input onKeyDown={this.handleKeyPressed} type="text" style={{width: '80%', float: 'left', height: '25px', zIndex: '1111', position: 'relative', marginTop: '10px'}} placeholder="Напишите сообщение" value={msg} onChange={this.handleChangeMsg}/>
                      <button type="button" className="im-send-btn im-chat-input--send _im_send im-send-btn_send" style={{float:'left', position: 'relative'}}  onClick={this.handleSendMsg}></button>
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

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const {user, chat, chatHistory} = state.appReducer;
  return {
    user,
    chat,
    chatHistory,
    id: ownProps.match.params.id
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatList))
