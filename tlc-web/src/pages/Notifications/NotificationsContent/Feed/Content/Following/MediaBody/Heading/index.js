import React, { Component } from 'react';
import Title from './Title';
import Time from './Time';

export default class Heading extends Component {
	render() {
		return (
			<div {...this.props}>
				<Time className="float-right text-muted" />
	      <Title className="media-heading" />
      </div>
		);
	}
}
