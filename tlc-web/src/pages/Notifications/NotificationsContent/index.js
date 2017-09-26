import React, { Component } from 'react';

import Feed from './Feed';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

export default class NotificationsContent extends Component {
	render() {
		return (
			<div {...this.props}>
		    <LeftColumn className="col-lg-3" />
		    <Feed className="col-lg-6" />
		    <RightColumn className="col-lg-3" /> 
		  </div>
		);
	}
}
