import React, { Component } from 'react';
import Content from './Content';
import Navigation from './Navigation';

import Image from '../../../img/iceland.jpg';

export default class BackgroundImage extends Component {
	render() {
		return (
			<div {...this.props} src={Image}>
			  <Content className="container" />
			  <Navigation className="profile-header-nav" />
			</div>
		);
	}
}
