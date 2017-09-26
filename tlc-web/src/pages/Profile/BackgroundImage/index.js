import React, { Component } from 'react';
import Navigation from './Navigation';

import Image from '../../../img/iceland.jpg';

export default class BackgroundImage extends Component {
	render() {
		return (
			<div {...this.props} src={Image}>
			  <div className="container">
			    <div className="container-inner">
			      <img className="rounded-circle media-object" src="../assets/img/avatar-dhg.png" />
			      <h3 className="profile-header-user">Dave Gamache</h3>
			      <p className="profile-header-bio">m
			        I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.
			      </p>
			    </div>
			  </div>

			  <Navigation className="profile-header-nav" />
			</div>
		);
	}
}
