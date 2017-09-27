import React, { Component } from 'react';

export default class Facebook extends Component {
	render() {
		return (
			<div {...this.props}>
				<li><span className="text-muted icon icon-facebook mr-3"></span>Facebook <a href="#">TheLadiesChampion</a></li>
			</div>
		);
	}
}