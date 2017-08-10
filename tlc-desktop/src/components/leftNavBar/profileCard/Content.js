import React, { Component } from 'react';
import CardMenu from './CardMenu';

export default class Content extends Component {
	render() {
		return (
			<div className="card-block text-center">
        <a href="profile/index.html">
          <img
            className="card-profile-img"
            src="assets/img/avatar-dhg.png" />
        </a>

        <h6 className="card-title">
          <a className="text-inherit" href="profile/index.html">Dave Gamache</a>
        </h6>

        <p className="mb-4">I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.</p>

				<CardMenu />
        
      </div>
		);
	}
}