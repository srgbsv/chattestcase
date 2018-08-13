import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export default class Footer extends Component{

  render = () => {
    return (
      <div id="footer_wrap" className="footer_wrap fl_r" style={{width: '795px'}}>
        <div className="footer_nav" id="bottom_nav">
          <div className="footer_copy fl_l"><a href="https://vk.com/about">ВКонтакте</a> © 2018</div>
          <div className="footer_lang fl_r">
            Язык:
            <a className="footer_lang_link">English</a>
            <a className="footer_lang_link">Русский</a>
            <a className="footer_lang_link">Українська</a>
            <a className="footer_lang_link">все языки »</a>
          </div>
          <div className="footer_links">
            <a className="bnav_a" href="https://vk.com/about">о компании</a>
            <a className="bnav_a" href="https://vk.com/support?act=home" style={{display: 'none'}}>помощь</a>
            <a className="bnav_a" href="https://vk.com/terms">правила</a>
            <a className="bnav_a" href="https://vk.com/ads">реклама</a>

            <a className="bnav_a" href="https://vk.com/dev">разработчикам</a>
            <a className="bnav_a" href="https://vk.com/jobs" style={{display: 'none'}}>вакансии</a>
          </div>
        </div>
      </div>
    )
  };

}
