import React, { Component } from 'react';
import Title from './Title';
import Content from './Content';

export default class Container extends Component {
	render() {
		return (
			<div {...this.props}>
        <Title className="mb-3" />
        <Content className="list-unstyled list-spaced" />
      </div>
		);
	}
}
