import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export default class LoginForm extends Component{
  static propTypes = {
    msg: PropTypes.string,
    onLogin: PropTypes.func.isRequired
  };
  static defaultProps = {
    msg: ''
  };
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      pass: '',
      remember: true,
      msg: ''
    }

  }
  handleLoginChange = (e) => {
    this.setState({
      login: e.target.value
    })
  };
  handlePassChange = (e) => {
    this.setState({
      pass: e.target.value
    })
  };
  handleRememberChange = () => {
    this.setState({
      remember: !this.state.remember
    });
  };
  handleLoginClick = () => {
    const {onLogin} = this.props;
    const {login, pass, remember} = this.state;
    if (login && pass) {
      onLogin(login, pass, remember)
    }
  };
  handleKeyPressed = (e) => {
    if (e.keyCode == 13) {
      this.handleLoginClick()
    }
  };
  render = () => {
    const {msg} = this.props;
    const {login, pass} = this.state;
    return (
      <div id="quick_login" className="quick_login">
        <div>
          <form method="POST" name="login" id="quick_login_form">
            <div className="label">Телефон или email</div>
            <div className="labeled">
              <input name="email" className="dark" id="quick_email" type="text"
                     value={login}
                     onChange={this.handleLoginChange}
                     onKeyDown={this.handleKeyPressed}
                />
            </div>
            <div className="label">Пароль</div>
            <div className="labeled">
              <input name="pass" className="dark" id="quick_pass" type="password"
                value={pass}
                onChange={this.handlePassChange}
                onKeyDown={this.handleKeyPressed}
                />
            </div>
            {
              msg != ''?
                <div className="error-msg">
                  {msg}
                </div>
              :''
            }
          </form>
          <button className="quick_login_button flat_button button_wide" id="quick_login_button" onClick={this.handleLoginClick}>Войти</button>
          <div className="clear forgot">
            <div className={classNames("checkbox", {'on': !this.state.remember})}
                 onClick={this.handleRememberChange}
                 id="quick_expire"
                 style={{display: 'block'}}
              >Чужой компьютер
            </div>
          </div>
        </div>
      </div>
    )
  };

}
