import React, { Component } from 'react';

export default class Instagram extends Component {
	render() {
		return (
			<div {...this.props}>
				<li><span className="text-muted icon icon-instagram mr-3"></span>Instagram <a href="#">TheLadiesChamp</a></li>
			</div>
		);
	}
}