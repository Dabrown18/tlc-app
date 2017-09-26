import React, { Component } from 'react';
import Title from './Title';
import ToFollow from './ToFollow';

export default class Content extends Component {
	render() {
		return (
			<div {...this.props}>
        <Title className="mb-3" />
        <ToFollow className="media-list media-list-stream" />
      </div>
		);
	}
}
