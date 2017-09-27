import React, { Component } from 'react';
import Description from './Description';

export default class Content extends Component {
	render() {
		return (
			<div {...this.props}>
		    <Description className="container-inner" />
		  </div>
		);
	}
}
