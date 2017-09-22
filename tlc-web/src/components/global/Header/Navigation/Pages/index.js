import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pages extends Component {
	render() {
		return (	
			<ul {...this.props}>
	      <li className="nav-item active">
	        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/profile">Profile</Link>
	      </li>
	    </ul>
		);
	}
}