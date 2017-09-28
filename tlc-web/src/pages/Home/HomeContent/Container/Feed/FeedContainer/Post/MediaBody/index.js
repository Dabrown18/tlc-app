import React, { Component } from 'react';
import Heading from './Heading';
import Content from './Content';
import Space from './Space';
import Comments from './Comments';

export default class MediaBody extends Component {
	render() {
		return (
			<div {...this.props}>
        <Heading className="media-heading" />

        <Content />

        <Space className="media-body-inline-grid" />

        <Comments className="media-list mb-2" />
      </div>
		);
	}
}
