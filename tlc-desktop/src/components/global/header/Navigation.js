import React, { Component } from 'react';
import NavigationLinks from './NavigationLinks';
import Search from './Search';
import ActivityLinks from './ActivityLinks';

export default class Navigation extends Component {
	render() {
		return (
			<div className="collapse navbar-collapse" id="navbarResponsive">
		    
		    <NavigationLinks />

		    <Search />

		    <ActivityLinks />

		    <ul className="nav navbar-nav hidden-xs-up" id="js-popoverContent">
		      <li className="nav-item"><a className="nav-link" href="#" data-action="growl">Growl</a></li>
		      <li className="nav-item"><a className="nav-link" href="login/index.html">Logout</a></li>
	    	</ul>
	    	
		  </div>
		);
	}
}