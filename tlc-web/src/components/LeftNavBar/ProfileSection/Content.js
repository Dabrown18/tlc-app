import React, { Component } from 'react';
import CardMenu from './CardMenu';
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

				<CardMenu className="card-menu" />
        
      </div>
		);
	}
}