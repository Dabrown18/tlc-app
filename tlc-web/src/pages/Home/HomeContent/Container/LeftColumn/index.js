import React, { Component } from 'react';
import Profile from './Profile';
import About from './About';

export default class LeftColumn extends Component {
	render() {
		return (
			<div {...this.props}>     
				<Profile className="card card-profile mb-4" />
	      <About className="card visible-md-block visible-lg-block mb-4" />
	    </div>
		);
	}
}

