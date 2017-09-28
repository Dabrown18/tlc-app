import React, { Component } from 'react';
import FeedContainer from './FeedContainer';

export default class Container extends Component {
	render() {
		return (
			<div className="col-lg-6">
				<FeedContainer className="list-group media-list media-list-stream mb-4" />
	    </div>
		);
	}
}