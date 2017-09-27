import React, { Component } from 'react';

export default class Password extends Component {
	render() {
		return (
			<div {...this.props}>
	      <input type="password" className="form-control" placeholder="Password" />
	    </div>
		);
	}
}
