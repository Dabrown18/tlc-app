import React, { Component } from 'react';


const logo = require('./images/logo.png');

export default class Logo extends Component {
	render() {
		return (
			<div {...this.props}>
				<a href="../index.html" className="app-brand mb-5">
		      <img src={logo} alt="brand" />
		    </a>
			</div>
		);
	}
}
