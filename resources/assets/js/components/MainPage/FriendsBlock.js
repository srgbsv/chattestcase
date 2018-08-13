import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export default class FriendsBlock extends Component{
  static propTypes = {
    fetchFriends: PropTypes.func.isRequired,
    friends: PropTypes.array
  };
  static defaultProps = {
    friends: []
  };
  componentDidMount = () => {
    this.props.fetchFriends()
  };
  render = () => {
    const {friends} = this.props;
    return (
      <aside aria-label="Друзья">
        <div className="module clear people_module _module" id="profile_friends">
          <a className="module_header">
            <div className="header_top clear_fix">
              <span className="header_label fl_l">Друзья</span>
              <span className="header_count fl_l">{friends.lebgth}</span>
            </div>
          </a>
          <div className="module_body clear_fix">
            {
              friends.length == 0?
              <div>К сожалению у вас друзей нет %(</div>
              :
                friends.map((friend) => (<div key={'friend'+friend.id} className="people_cell">
                    <a className="people_cell_ava" href=""  title={friend.name}>
                      <img className="people_cell_img" src={"/img/avatars/user"+friend.id+".jpg"} alt="Александр Мизин" />
                      <span className="blind_label">.</span>
                    </a>
                    <div className="people_cell_name">
                      <a title={friend.name}>
                        {friend.name}
                      </a>
                    </div>
                  </div>))
            }
          </div>
        </div>
      </aside>
    )
  };

}
