import React, { Component } from 'react';
import Container from './Container';

export default class Navigation extends Component {
	render() {
		return (
			<nav {...this.props}>
		    <Container className="nav nav-tabs justify-content-center" />
		  </nav>
		);
	}
}
