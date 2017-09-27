import React, { Component } from 'react';

export default class Patreon extends Component {
	render() {
		return (
			<div {...this.props}>
				<li><span className="text-muted icon icon-vinyl mr-3"></span>Patreon <a href="#">TheLadiesChampion</a></li>
			</div>
		);
	}
}