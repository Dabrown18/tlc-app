import React, { Component } from 'react';
import Users from './Users';

export default class ToFollow extends Component {
	render() {
		return (
			<ul {...this.props}>
        <Users className="media mb-3" />
      </ul>
		);
	}
}
