import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as AppActions from '../actions/AppActions'
import FriendsBlock from '../components/MainPage/FriendsBlock.js'

class MainPage extends Component{
  static propTypes={
    user: PropTypes.object,
    friends: PropTypes.array
  };
  render = () => {
    const {user, friends, actions} = this.props;
    if (!user || !user.isLogin) return null;
    return  (
      <div id="page_body" className="fl_r " style={{width: '795px'}}>
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
                <div id="profile" className="profile_content">
                  <div className="wide_column_right">
                    <div className="narrow_column_wrap">
                      <div className="narrow_column" id="narrow_column">
                        <div className="page_block page_photo">
                          <div className="owner_photo_wrap actions_with_effects" id="owner_photo_wrap">
                            <div className="page_avatar_wrap no_stickers_1april">
                              <aside aria-label="Фотография">
                                <div id="page_avatar" className="page_avatar">
                                  <a id="profile_photo_link">
                                    <img className="page_avatar_img" src={"/img/avatars/user"+user.id+".jpg"} width="200" height="200" />
                                  </a>
                                </div>
                              </aside>
                            </div>
                          </div>
                        </div>
                        <div className="page_block">
                          <FriendsBlock
                            friends={friends}
                            fetchFriends={actions.fetchFriends}
                            />
                        </div>
                      </div>
                    </div>
                    <div className="wide_column_wrap">
                      <div className="wide_column" id="wide_column">
                        <div className="page_block">
                          <div id="page_info_wrap" className="page_info_wrap ">
                            <div className="page_top">
                              <h2 className="page_name">{user.name}</h2>
                              <div className="page_current_info" id="page_current_info">
                              <div id="currinfo_wrap">
                                <span id="current_info" className="current_info"><span className="my_current_info"><span className="current_text">{user.status}</span></span></span>
                                </div>
                              </div>
                            </div>
                            <div className="profile_info profile_info_short" id="profile_short">
                              <div className="clear_fix profile_info_row ">
                                <div className="label fl_l">День рождения:</div>
                                <div className="labeled">
                                  <a>{user.birthday}</a></div>
                                </div>
                              <div className="clear_fix profile_info_row ">
                                <div className="label fl_l">Город:</div>
                                <div className="labeled">
                                  <a>{user.city}</a>
                                </div>
                              </div>
                              <div className="clear_fix profile_info_row ">
                                <div className="label fl_l">Страна:</div>
                                <div className="labeled">
                                  <a>{user.country}</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

const mapStateToProps = state => {
  const {user, friends} = state.appReducer;
  return {
    user,
    friends
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage))
