import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Pages extends Component {
	render() {
		return (	
			<ul {...this.props}>
	      <li>
	        <NavLink exact className="nav-link" to="/">Home</NavLink>
	      </li>
	      <li className="nav-item">
	        <NavLink className="nav-link" to="/profile">Profile</NavLink>
	      </li>
	    </ul>
		);
	}
}