import React, { Component } from 'react';

const Image = require('../images/user-profile.jpg');

export default class ProfileImage extends Component {
	render() {
		return (
			<div {...this.props}>
				<a href="profile/index.html">
          <img
            className="card-profile-img"
            src={Image} />
        </a>
			</div>
		);
	}
}