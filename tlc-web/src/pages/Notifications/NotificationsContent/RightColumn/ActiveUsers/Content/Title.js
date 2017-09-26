import React, { Component } from 'react';

export default class Title extends Component {
	render() {
		return (
			<h6 {...this.props}>Active Users <small>· <a href="#">View All</a></small></h6>
		);
	}
}
