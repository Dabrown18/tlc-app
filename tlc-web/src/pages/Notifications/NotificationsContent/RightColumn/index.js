import React, { Component } from 'react';
import ActiveUsers from './ActiveUsers';

export default class RightColumn extends Component {
	render() {
		return (
			<div {...this.props}>
	      <ActiveUsers className="card mb-4 hidden-md-down" />
	    </div>
		);
	}
}
