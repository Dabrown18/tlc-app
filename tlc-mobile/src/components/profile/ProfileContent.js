import React, { Component } from 'react';

import ProfileImage from './ProfileImage';

export default class ProfileContent extends Component {

  render() {
    return (
      <ProfileImage profile={this.props.profile} />
    );
  }
}
