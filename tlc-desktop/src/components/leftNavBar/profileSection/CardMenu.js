import React, { Component } from 'react';
import Followers from './cardMenuItems/Followers';
import Likes from './cardMenuItems/Likes';
import Comments from './cardMenuItems/Comments';

export default class CardMenu extends Component {
	render() {
		return (
			<ul {...this.props}>

				<Followers className="card-menu-item" />
	      
	      <Likes className="card-menu-item" />

	      <Comments className="card-menu-item" />
	      
	    </ul>
		);
	}
}