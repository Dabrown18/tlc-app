import React, { Component } from 'react';

export default class Notifications extends Component {
	render() {
		return (
			<div {...this.props}>
				<a href="#" className="list-group-item list-group-item-action justify-content-between">
	        <span>Notifications</span>
	        <span className="icon icon-chevron-thin-right"></span>
	      </a>
      </div>
		);
	}
}
