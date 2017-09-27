import React, { Component } from 'react';
import Menu from './Menu';
import ProfileImage from './ProfileImage';
import ProfileName from './ProfileName';
import Occupation from './Occupation';

export default class Content extends Component {
	render() {
		return (
			<div {...this.props}>
        <ProfileImage />

        <ProfileName />

        <Occupation />

				<Menu className="card-menu" /> 
      </div>
		);
	}
}