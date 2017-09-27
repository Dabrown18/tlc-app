import React, { Component } from 'react';

export default class From extends Component {
	render() {
		return (
			<div {...this.props}>
				<li><span className="text-muted icon icon-location-pin mr-3"></span>From <a href="#">Seattle, WA</a></li>
			</div>
		);
	}
}