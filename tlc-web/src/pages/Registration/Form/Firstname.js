import React, { Component } from 'react';

export default class Firstname extends Component {
	render() {
		return (
			<div {...this.props}>
	      <input className="form-control" placeholder="Firstname" />
	    </div>
		);
	}
}
