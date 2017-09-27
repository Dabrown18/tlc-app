import React, { Component } from 'react';
import Content from './Content';
import Trending from './Trending';

export default class LeftColumn extends Component {
	render() {
		return (
			<div {...this.props}>

	      <Content className="list-group mb-4" />

	      <Trending className="card hidden-md-down" />

	    </div>
		);
	}
}
