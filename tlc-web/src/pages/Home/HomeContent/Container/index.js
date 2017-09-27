import React, { Component } from 'react';

import LeftColumn from './LeftColumn';
import Feed from './Feed';
import RightColumn from './RightColumn';

export default class Container extends Component {
	render() {
		return (
			<div {...this.props}>   
		    <LeftColumn className="col-lg-3" />
		    <Feed />
		    <RightColumn className="col-lg-3"/> 
		  </div>
		);
	}
}
