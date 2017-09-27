import React, { Component } from 'react';

export default class Username extends Component {
	render() {
		return (
			<div {...this.props}>
	      <input className="form-control" placeholder="Username or Email Address" />
	    </div>
		);
	}
}
