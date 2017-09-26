import React, { Component } from 'react';

export default class Title extends Component {
	render() {
		return (
			<h6 {...this.props}>About <small>· <a href="#">Edit</a></small></h6>
		);
	}
}
