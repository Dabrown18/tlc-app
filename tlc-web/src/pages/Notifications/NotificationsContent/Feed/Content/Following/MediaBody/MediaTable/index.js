import React, { Component } from 'react';
import TableRow from './TableRow';

export default class MediaTable extends Component {
	render() {
		return (
			<div {...this.props}>
        <TableRow className="row" />
      </div>
		);
	}
}
