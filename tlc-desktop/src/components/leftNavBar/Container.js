import React, { Component } from 'react';
import ProfileSection from './profileSection/Container';
import AboutSection from './aboutSection/Container';

export default class Container extends Component {
	render() {
		return (
			<div className="col-lg-3">
	      
				<ProfileSection className="card card-profile mb-4" />

	      <AboutSection />

	    </div>
		);
	}
}

