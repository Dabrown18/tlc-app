import React, { Component } from 'react';

export default class FormControl extends Component {
	render() {
		return (
			<input {...this.props} type="text" placeholder="Message" />
		);
	}
}
