import React, { Component } from 'react';
import MediaBody from './MediaBody';

export default class Post extends Component {
	render() {
		return (
			<li {...this.props}>
        <img
          className="media-object d-flex align-self-start mr-3"
          src="assets/img/avatar-dhg.png" />
        <MediaBody className="media-body" />
      </li>
		);
	}
}
