import React, { Component } from 'react';
import HomeContent from './HomeContent';

export default class Home extends Component {
	render() {
		return (
			<div {...this.props}>
				<HomeContent className="container pt-4" />
			</div>
		);
	}
}
