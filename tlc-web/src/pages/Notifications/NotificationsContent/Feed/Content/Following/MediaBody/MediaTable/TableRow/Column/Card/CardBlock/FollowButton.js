import React, { Component } from 'react';

export default class FollowButton extends Component {
	render() {
		return (
			<button {...this.props}>
        <span className="icon icon-add-user"></span> Follow
      </button>
		);
	}
}
