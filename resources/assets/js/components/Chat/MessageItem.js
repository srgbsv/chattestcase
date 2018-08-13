import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export default class ChatItem extends Component{
  static propTypes = {
    author: PropTypes.object.isRequired,
    msg: PropTypes.object
  };
  render = () => {
    const {author, msg} = this.props;
    return <div className="im-mess-stack _im_mess_stack">
        <div className="im-mess-stack--photo">
          <div className="nim-peer nim-peer_small fl_l">
            <div className="nim-peer--photo-w">
              <div className="nim-peer--photo">
                <a target="_blank" className="im_grid">
                  <img alt={author.name} src={'/img/avatars/user'+author.id+'.jpg'} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="im-mess-stack--content">
          <div className="im-mess-stack--info">
            <div className="im-mess-stack--pname">
              <a href="" className="im-mess-stack--lnk" title="" target="_blank">{author.name}</a>
              <span className="im-mess-stack--tools">
                <a className="_im_mess_link">{msg.created_at}</a>
              </span>
            </div>
          </div>
          <ul className="ui_clean_list im-mess-stack--mess _im_stack_messages">
            <li className="im-mess im_out _im_mess im-mess_out">
              <div className="im-mess--text wall_module _im_log_body">{msg.msg}</div>
            </li>
          </ul>
        </div>
      </div>
  };

}
