import React, { Component } from 'react';

export default class Description extends Component {
	render() {
		return (
			<div {...this.props}>
	      <img className="rounded-circle media-object" src="../assets/img/avatar-dhg.png" />
	      <h3 className="profile-header-user">Dave Gamache</h3>
	      <p className="profile-header-bio">m
	        I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.
	      </p>
	    </div>
		);
	}
}
