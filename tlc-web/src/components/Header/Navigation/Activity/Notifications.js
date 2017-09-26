import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Notifications extends Component {
	render() {
		return (
			<li {...this.props}>
        <NavLink className="app-notifications nav-link" to="/notifications">
          <span className="icon icon-bell"></span>
        </NavLink>
      </li>
		);
	}
}