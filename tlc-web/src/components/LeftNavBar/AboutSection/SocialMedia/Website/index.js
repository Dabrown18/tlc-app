import React, { Component } from 'react';

export default class Website extends Component {
	render() {
		return (
			<div {...this.props}>
				<li><span className="text-muted icon icon-globe mr-3"></span>Website <a href="#">TheLadiesChampion</a></li>
			</div>
		);
	}
}