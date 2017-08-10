import React, { Component } from 'react';
import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';

export default class Header extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-toggleable-sm fixed-top navbar-inverse bg-primary app-navbar">
				  <button
				    className="navbar-toggler navbar-toggler-right hidden-md-up"
				    type="button"
				    data-toggle="collapse"
				    data-target="#navbarResponsive"
				    aria-controls="navbarResponsive"
				    aria-expanded="false"
				    aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <HeaderLogo />
				
					<Navigation />
				  
				</nav>
			</div>
		);
	}
}