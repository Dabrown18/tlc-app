import React, { Component } from 'react';
import Content from './Content';

export default class Feed extends Component {
	render() {
		return (
			<div {...this.props}>
      	<Content className="list-group media-list media-list-stream mb-2" />
    	</div>
		);
	}
}
