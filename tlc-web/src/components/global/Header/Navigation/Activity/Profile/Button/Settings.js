import React, { Component } from 'react';

export default class Settings extends Component {
	render() {
		return (
			<div>
				<ul className="nav navbar-nav hidden-xs-up" id="js-popoverContent">
		      <li className="nav-item"><a className="nav-link" href="#" data-action="growl">Growl</a></li>
		      <li className="nav-item"><a className="nav-link" href="login/index.html">Logout</a></li>
	    	</ul>
			</div>
		);
	}
}
