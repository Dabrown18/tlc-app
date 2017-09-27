import React, { Component } from 'react';
import Notifications from './Notifications';
import Mentions from './Mentions';

export default class Content extends Component {
	render() {
		return (
			<div {...this.props}>
        <Notifications />
        <Mentions />
      </div>
		);
	}
}
