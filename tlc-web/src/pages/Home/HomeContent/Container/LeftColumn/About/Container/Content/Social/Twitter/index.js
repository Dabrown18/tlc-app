import React, { Component } from 'react';

export default class Twitter extends Component {
	render() {
		return (
			<div {...this.props}>
				<li><span className="text-muted icon icon-twitter mr-3"></span>Twitter <a href="#">TheLadiesChamp_</a></li>
			</div>
		);
	}
}