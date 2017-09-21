import React, { Component } from 'react';

export default class NavigationLinks extends Component {
	render() {
		return (
			<ul className="navbar-nav mr-auto">
	      <li className="nav-item active">
	        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" href="profile/index.html">Profile</a>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" data-toggle="modal" href="#msgModal">Messages</a>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" href="docs/index.html">Docs</a>
	      </li>

	      <li className="nav-item hidden-md-up">
	        <a className="nav-link" href="notifications/index.html">Notifications</a>
	      </li>
	      <li className="nav-item hidden-md-up">
	        <a className="nav-link" data-action="growl">Growl</a>
	      </li>
	      <li className="nav-item hidden-md-up">
	        <a className="nav-link" href="login/index.html">Logout</a>
	      </li>
	    </ul>
		);
	}
}