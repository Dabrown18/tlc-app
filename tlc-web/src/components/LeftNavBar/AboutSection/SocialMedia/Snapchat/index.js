import React, { Component } from 'react';

export default class Snapchat extends Component {
	render() {
		return (
			<div {...this.props}>
				<li><span className="text-muted icon icon-vinyl mr-3"></span>Snapchat <a href="#">LadiesChampion</a></li>
			</div>
		);
	}
}