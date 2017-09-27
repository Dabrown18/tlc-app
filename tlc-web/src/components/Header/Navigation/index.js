import React, { Component } from 'react';
import Pages from './Pages';
import Search from './Search';
import Activity from './Activity';

export default class Navigation extends Component {
	render() {
		return (
			<div {...this.props}>  
		    <Pages className="navbar-nav mr-auto" />
		    <Search className="form-inline float-right hidden-sm-down" />
		    <Activity id="#js-popoverContent" className="nav navbar-nav float-right mr-0 hidden-sm-down" />
		  </div>
		);
	}
}