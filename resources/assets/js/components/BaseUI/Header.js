import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';
import ProfileHeaderBlock from '../MainPage/ProfileHeaderBlock.js'

export default class Header extends Component{
  state = {
    search:''
  };
  render = () => {
    const {user} = this.props;
    const {search} = this.state;
    return (
      <div id="page_header_cont" className="page_header_cont">
        <div className="back"></div>
        <div id="page_header_wrap" className="page_header_wrap" style={{width: '1906px', marginLeft: '0px'}}>
          <a className="top_back_link" href="" id="top_back_link" style={{maxWidth: '1871px'}}></a>
          <div id="page_header" className="p_head p_head_l0" style={{width: '960px'}}>
            <div className="content">
              <div id="top_nav" className="head_nav">
                <div className="head_nav_item fl_l"><a className="top_home_link fl_l " href="https://vk.com/" aria-label="На главную" ><div className="top_home_logo"></div></a></div>
                <div className="head_nav_item fl_l">
                  <div id="ts_wrap" className="ts_wrap">
                    <input name="disable-autofill" style={{display: 'none'}}/>
                    <div className="input_back_wrap no_select">
                      <div className="input_back" style={{margin: '7px 0px 7px 8px', padding: '6px 6px 6px 19px'}}>
                        <div className="input_back_content" style={{width: '210px'}} onClick={()=>{this.setState({search: 'Это тестовый пример. Поиск не работает. :)'})}}>Поиск</div>
                      </div>
                    </div>
                    <input id="ts_input" aria-label="Поиск" type="text" className="text ts_input" value={search} onChange={(e)=>{this.setState({search:e.target.value})}} />
                  </div>
                </div>
                <div className="head_nav_item fl_l head_nav_btns">
                </div>
                <div className="head_nav_item fl_r head_nav_btns">
                  {user && user.isLogin ?
                  <ProfileHeaderBlock
                    user={user}
                    />
                    :
                    <a className="top_nav_link" href="https://vk.com/join" id="top_reg_link">
                      регистрация
                    </a>
                  }
                </div>
                </div>
                  <div id="ts_cont_wrap" className="ts_cont_wrap"></div>
                </div>
              </div>
            </div>
          </div>

    )
  };

}
