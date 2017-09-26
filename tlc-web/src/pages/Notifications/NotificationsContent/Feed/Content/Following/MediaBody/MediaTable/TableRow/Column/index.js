import React, { Component } from 'react';
import Card from './Card';

export default class Column extends Component {
	render() {
		return (
			<div {...this.props}>
        <Card className="card card-profile" />
      </div>
		);
	}
}
