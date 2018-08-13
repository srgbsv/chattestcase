import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export default class MainMenu extends Component{
  handleMenuClick = (path) => {
    const {curPath, onChangeRoute} = this.props;
    if (curPath != path) {
      onChangeRoute(path)
    }
  };
  render = () => {
    return (
      <nav>
        <ol>
          <li id="l_pr">
            <a onClick={()=>{this.handleMenuClick('/')}}>
              <span className="left_fixer">
              <span className="left_icon fl_l"></span>
              <span className="left_label inl_bl">Моя Страница</span>
              </span>
            </a>
          </li>
          <li id="l_msg">
            <a onClick={()=>{this.handleMenuClick('/chats')}}>
              <span className="left_fixer">
                <span className="left_count_wrap fl_r left_void"></span>
                <span className="left_icon fl_l"></span>
                <span className="left_label inl_bl">Сообщения</span>
              </span>
            </a>
          </li>
        </ol>
      </nav>
    )
  };

}
