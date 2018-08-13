import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export default class LoginPage extends Component{
  componentDidMount = () => {
  };
  render = () => {
    return (
      <div id="page_body" className="fl_r " style={{width: '795px'}}>
        <div id="header_wrap2">
          <div id="header_wrap1">
            <div id="header" style={{display: 'none'}}>
              <h1 id="title"></h1>
            </div>
          </div>
        </div>
        <div id="wrap_between"></div>
        <div id="wrap3"><div id="wrap2">
          <div id="wrap1">
            <div id="content" className="page_block"><div className="login_mobile_promo_wrap clear_fix">
              <div className="login_mobile_apps">
                <div className="login_mobile_header">Это тестовый пример</div>
                <div className="login_mobile_info">Вконтакте не работает. Это тестовый пример</div>
                <button className="flat_button login_mobile_install_button" id="login_mobile_app_install_button" >Установить приложение на телефон</button>
                <div className="login_app_sms_sent" id="login_app_sms_sent">Ссылка на установку отправлена на указанный номер телефона</div>
                <div className="login_app_devices">

                  <a href="https://play.google.com/store/apps/details?id=com.vkontakte.android" target="_blank" className="login_app_device login_app_device_android">
                    <div className="login_app_device_screen_wrap">
                      <div className="login_app_device_screen login_app_device_ru"></div>
                    </div>

                    <div className="login_app_download_wrap">
                      <button className="flat_button secondary button_light">
                        <span className="login_app_download_icon"></span>
                        VK для Android
                      </button>
                    </div>
                  </a>

                  <a href="https://www.microsoft.com/store/apps/9wzdncrfj1pt" target="_blank" className="login_app_device login_app_device_wp">
                    <div className="login_app_device_screen_wrap">
                      <div className="login_app_device_screen login_app_device_ru"></div>
                    </div>

                    <div className="login_app_download_wrap">
                      <button className="flat_button secondary button_light">
                        <span className="login_app_download_icon"></span>
                        VK для WP
                      </button>
                    </div>
                  </a>

                  <a href="https://itunes.apple.com/ru/app/id564177498" target="_blank" className="login_app_device login_app_device_ios">
                    <div className="login_app_device_screen_wrap">
                      <div className="login_app_device_screen login_app_device_ru"></div>
                    </div>

                    <div className="login_app_download_wrap">
                      <button className="flat_button secondary button_light">
                        <span className="login_app_download_icon"></span>
                        VK для iPhone
                      </button>
                    </div>
                  </a>

                </div>
                <a href="https://vk.com/products" className="login_all_products_button">Все продукты</a>
              </div>
              <a ></a>

              <div className="login_about_mobile">
                Для доступа к быстрой мобильной версии сайта ВКонтакте достаточно ввести в Вашем телефоне короткий адрес: <a target="_blank" href="https://m.vk.com/">m.vk.com</a>
              </div>
            </div></div>
          </div>
        </div></div>
      </div>
    )
  };

}
