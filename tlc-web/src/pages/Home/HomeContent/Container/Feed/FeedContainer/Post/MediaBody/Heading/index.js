import React, { Component } from 'react';

export default class Heading extends Component {
	render() {
		return (
			<div {...this.props}>
        <small className="float-right text-muted">4 min</small>
        <h6>Dave Gamache</h6>
      </div>
		);
	}
}
