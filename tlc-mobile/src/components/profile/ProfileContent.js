import React, { Component } from 'react';

import ProfileImage from './ProfileImage';

export default class ProfileContent extends Component {

  render() {
    return (
      <ProfileImage
        isCurrentUser={this.props.isCurrentUser}
        profile={this.props.profile}
      />
    );
  }
}
