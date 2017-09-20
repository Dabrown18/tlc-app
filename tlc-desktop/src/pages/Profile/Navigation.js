import React, { Component } from 'react';

export default class Navigation extends Component {
	render() {
		return (
			<div {...this.props}>
				<nav className="profile-header-nav">
				    <ul className="nav nav-tabs justify-content-center">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Photos</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Others</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Anothers</a>
				      </li>
				    </ul>
				  </nav>
			</div>
		);
	}
}
