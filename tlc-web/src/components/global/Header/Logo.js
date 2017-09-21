import React, { Component } from 'react';

const Image = require('./images/logo.png');

export default class Logo extends Component {
	render() {
		return (
			<a {...this.props}>
			  <img src={Image} />
			</a>
		);
	}
}