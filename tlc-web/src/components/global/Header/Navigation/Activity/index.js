import React, { Component } from 'react';
import Notifications from './Notifications';
import Profile from './Profile';

export default class ActivityLinks extends Component {
	render() {
		return (
			<ul {...this.props}>
	     
	    	<Notifications className="nav-item" />

				<Profile className="nav-item ml-2" />
	      
	    </ul>
		);
	}
}