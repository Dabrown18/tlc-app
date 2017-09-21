import React, { Component } from 'react';

export default class Notifications extends Component {
	render() {
		return (
			<li {...this.props}>
        <a className="app-notifications nav-link" href="notifications/index.html">
          <span className="icon icon-bell"></span>
        </a>
      </li>
		);
	}
}