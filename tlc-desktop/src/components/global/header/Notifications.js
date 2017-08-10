import React, { Component } from 'react';

export default class Notifications extends Component {
	render() {
		return (
			<li className="nav-item">
        <a className="app-notifications nav-link" href="notifications/index.html">
          <span className="icon icon-bell"></span>
        </a>
      </li>
		);
	}
}