import React, { Component } from 'react';
import Input from './Input';

export default class Media extends Component {
	render() {
		return (
			<li {...this.props}>
        <Input className="input-group" />
      </li>
		);
	}
}
