import React, { Component } from 'react';
import Notifications from './Notifications';
import ProfileTab from './ProfileTab';

export default class ActivityLinks extends Component {
	render() {
		return (
			<ul {...this.props}>
	     
	    	<Notifications className="nav-item" />

				<ProfileTab className="nav-item ml-2" />
	      
	    </ul>
		);
	}
}