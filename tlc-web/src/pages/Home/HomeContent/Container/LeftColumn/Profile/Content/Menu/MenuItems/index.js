import React, { Component } from 'react';
import Followers from './Followers';
import Likes from './Likes';
import Comments from './Comments';

export default class MenuItems extends Component {
	render() {
		return (
			<div {...this.props}>
				<Followers className="card-menu-item" />
	      
	    	<Likes className="card-menu-item" />

	    	<Comments className="card-menu-item" />
			</div>
		);
	}
}