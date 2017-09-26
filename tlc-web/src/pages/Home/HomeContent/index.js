import React, { Component } from 'react';
import Container from './Container';

export default class HomeContent extends Component {
	render() {
		return (
			<div {...this.props}>
			  <Container className="row" />
			</div>
		);
	}
}
