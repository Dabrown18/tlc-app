import React, { Component } from 'react';

import ProfileImage from './ProfileImage';

export default class ProfileContent extends Component {

  render() {
    return (
      <ProfileImage
        isCurrentUser={this.props.isCurrentUser}
        currentUserId={this.props.currentUserId}
        profile={this.props.profile}
      />
    );
  }
}
