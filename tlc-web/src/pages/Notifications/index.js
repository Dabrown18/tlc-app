import React, { Component } from 'react';

import NotificationsContent from './NotificationsContent';

export default class Notifications extends Component {
	render() {
		return (
			<div className="container pt-4">
			  <NotificationsContent className="row" />
			</div>
		);
	}
}
