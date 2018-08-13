import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export default class ChatItem extends Component{
  static propTypes = {
    openChat: PropTypes.func.isRequired,
    chat: PropTypes.object.isRequired
  };
  handleOpenChat=() => {
    const {openChat, chat} = this.props;
    openChat(chat.id);
  };
  render = () => {
    const {chat} = this.props;
    return (
      <li className="nim-dialog _im_dialog nim-dialog_classic" onClick={this.handleOpenChat}>
        <div className="nim-dialog--photo">
          <div className="nim-peer _online _im_peer_online online mobile">
            <div className="nim-peer--photo-w">
              <div className="nim-peer--photo _im_dialog_photo">
                <a className="_im_peer_target _online_reader" target="_blank">
                  <div className="im_grid">
                    <img src={"/img/avatars/user"+chat.companion_id+".jpg"} width="50" height="50" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nim-dialog--content">
          <div className="nim-dialog--cw">
            <span role="link" className="blind_label"></span>
            <div className="nim-dialog--date _im_dialog_date">{chat.last_msg_date}</div>
              <div className="nim-dialog--name">
                <span className="nim-dialog--name-w" aria-hidden="true">
                  <span className="_im_dialog_link">{chat.companion_name}</span>
                </span>
              <button type="button" className="nim-dialog--star _im_dialog_star"></button>
            </div>
            <div className="nim-dialog--text-preview">
              <span className="nim-dialog--preview _dialog_body">
                <span className="nim-dialog--preview nim-dialog--preview-attach">{chat.last_msg}</span>
              </span>
            </div>
            <label className="blind_label _im_unread_blind_label"></label>
            <div className="nim-dialog--unread _im_dialog_unread_ct" aria-hidden="true">
            </div>
          </div>
        </div>
      </li>
    )
  };

}
