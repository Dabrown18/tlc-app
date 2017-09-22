import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Navigation from './Navigation';

export default class Header extends Component {
	render() {
		return (
			<nav {...this.props}>
			
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

			  <Logo className="navbar-brand" href="index.html"/>

				<Navigation className="collapse navbar-collapse" id="navbarResponsive" />
			  
			</nav>
		);
	}
}