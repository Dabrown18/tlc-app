import React, { Component } from 'react';
import Container from './Container';

export default class About extends Component {
	render() {
		return (
			<div {...this.props}>
        <Container className="card-block" />
      </div>
		);
	}
}