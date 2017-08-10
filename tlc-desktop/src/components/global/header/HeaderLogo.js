import React, { Component } from 'react';

const Logo = require('./images/logo.png');

export default class HeaderLogo extends Component {
	render() {
		return (
			<a className="navbar-brand" href="index.html">
			  <img src={Logo} />
			</a>
		);
	}
}