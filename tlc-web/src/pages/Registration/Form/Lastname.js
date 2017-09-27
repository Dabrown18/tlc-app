import React, { Component } from 'react';

export default class Lastname extends Component {
	render() {
		return (
			<div {...this.props}>
	      <input className="form-control" placeholder="Lastname" />
	    </div>
		);
	}
}
