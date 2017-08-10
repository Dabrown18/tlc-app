import React, { Component } from 'react';
import Notifications from './Notifications';
import ProfileTab from './ProfileTab';

export default class ActivityLinks extends Component {
	render() {
		return (
			<ul id="#js-popoverContent" className="nav navbar-nav float-right mr-0 hidden-sm-down">
	     
	    	<Notifications />

				<ProfileTab />
	      
	    </ul>
		);
	}
}