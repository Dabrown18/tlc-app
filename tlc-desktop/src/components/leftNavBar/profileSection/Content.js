import React, { Component } from 'react';
import CardMenu from './CardMenu';

const ProfileImage = require('./images/user-profile.jpg');

export default class Content extends Component {
	render() {
		return (
			<div {...this.props}>
        <a href="profile/index.html">
          <img
            className="card-profile-img"
            src={ProfileImage} />
        </a>

        <h6 className="card-title">
          <a className="text-inherit" href="profile/index.html">Natalia Kalkopf</a>
        </h6>

        <p className="mb-4">I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.</p>

				<CardMenu className="card-menu" />
        
      </div>
		);
	}
}