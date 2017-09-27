import React, { Component } from 'react';

export default class ProfilePhoto extends Component {
	render() {
		return (
			<img {...this.props} src="../assets/img/avatar-fat.jpg" />
		);
	}
}
