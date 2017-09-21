import React, { Component } from 'react';
import Header from './components/global/Header';
import { 
	BrowserRouter,
	Route
} from 'react-router-dom';

import {
	Home,
	Login,
	Profile
} from './pages';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header className="navbar navbar-toggleable-sm fixed-top navbar-inverse bg-primary app-navbar" />		
					<Route exact path="/" component={Home} />
					<Route path="/profile" component={Profile} />
					<Route path="/login"  component={Login} />
				</div>
			</BrowserRouter>
		);
	}
}