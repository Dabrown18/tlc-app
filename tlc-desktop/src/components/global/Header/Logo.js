import React, { Component } from 'react';

const Image = require('./images/logo.png');

export default class Logo extends Component {
	render() {
		return (
			<a className="navbar-brand" href="index.html">
			  <img src={Image} />
			</a>
		);
	}
}