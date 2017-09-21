import React, { Component } from 'react';

export default class Blog extends Component {
	render() {
		return (
			<div {...this.props}>
				<a href="#">Blog </a>
			</div>
		);
	}
}
