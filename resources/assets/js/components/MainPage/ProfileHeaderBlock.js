import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export default class ProfileHeaderBlock extends Component{
  static propTypes = {
    user: PropTypes.object.isRequired
  };
  render = () => {
    const {user} = this.props;
    return (
        <a id="top_profile_link" className="top_nav_link top_profile_link">
          <div className="top_profile_name">{user.name}</div>
          <img className="top_profile_img" src={'/img/avatars/user'+user.id+'.jpg'} alt={user.name} />
        </a>
    )
  };

}