import React, { Component } from 'react';
import MediaBody from './MediaBody';

export default class Following extends Component {
	render() {
		return (
			<li {...this.props}>
        <span className="icon icon-user text-muted mr-2 align-self-start"></span>
        <MediaBody className="media-body" />
      </li>
		);
	}
}
