import React, { Component } from 'react';
import MenuItems from './MenuItems';

export default class CardMenu extends Component {
	render() {
		return (
			<ul {...this.props}>

				<MenuItems />
	      
	    </ul>
		);
	}
}