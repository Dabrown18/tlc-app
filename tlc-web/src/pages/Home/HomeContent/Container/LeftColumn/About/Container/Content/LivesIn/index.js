import React, { Component } from 'react';

export default class From extends Component {
	render() {
		return (
			<div {...this.props}>
				<li><span className="text-muted icon icon-home mr-3"></span>Lives in <a href="#">San Francisco, CA</a></li>
			</div>
		);
	}
}