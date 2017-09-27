import React, { Component } from 'react';

export default class Container extends Component {
	render() {
		return (
			<ul {...this.props}>
	      <li className="nav-item">
	        <a className="nav-link" href="#">Photos</a>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" href="#">Others</a>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" href="#">Anothers</a>
	      </li>
	    </ul>
		);
	}
}
