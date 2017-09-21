import React, { Component } from 'react';
import ProfileSection from './ProfileSection';
import AboutSection from './AboutSection';

export default class LeftNavBar extends Component {
	render() {
		return (
			<div className="col-lg-3">
	      
				<ProfileSection className="card card-profile mb-4" />

	      <AboutSection />

	    </div>
		);
		
	}
}

