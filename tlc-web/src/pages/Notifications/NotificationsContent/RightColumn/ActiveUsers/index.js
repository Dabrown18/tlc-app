import React, { Component } from 'react';
import Content from './Content';

export default class ActiveUsers extends Component {
	render() {
		return (
			<div {...this.props}>
        <Content className="card-block" />
      </div>
		);
	}
}
