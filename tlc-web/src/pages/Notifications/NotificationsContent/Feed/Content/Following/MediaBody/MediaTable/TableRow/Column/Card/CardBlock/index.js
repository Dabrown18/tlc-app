import React, { Component } from 'react';
import FollowButton from './FollowButton';
import ProfilePhoto from './ProfilePhoto';
import Name from './Name';
import Occupation from './Occupation';

export default class CardBlock extends Component {
	render() {
		return (
			<div {...this.props}>
        <ProfilePhoto className="card-profile-img" />
        <Name className="card-title" />
        <Occupation className="mb-4" />
        <FollowButton className="btn btn-outline-primary btn-sm" />
      </div>
		);
	}
}
