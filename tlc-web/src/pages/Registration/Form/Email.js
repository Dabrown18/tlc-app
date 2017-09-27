import React, { Component } from 'react';

export default class Email extends Component {
	render() {
		return (
			<div {...this.props}>
	      <input className="form-control" placeholder="Email" />
	    </div>
		);
	}
}
