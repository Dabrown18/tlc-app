import React, { Component } from 'react';

export default class Title extends Component {
	render() {
		return (
			<li {...this.props}>
        <h4 className="m-0">Notifications</h4>
      </li>
		);
	}
}
