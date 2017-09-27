import React, { Component } from 'react';
import Heading from './Heading';
import MediaTable from './MediaTable';

export default class MediaBody extends Component {
	render() {
		return (
			<div {...this.props}>
        <Heading />
        <MediaTable className="mt-2" />
      </div>
		);
	}
}
