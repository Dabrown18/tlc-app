import React, { Component } from 'react';

export default class BackgroundImage extends Component {
	render() {
		return (
			<div {...this.props} style={{backgroundImage: "url(../assets/img/instagram_4.jpg)"}}></div>
		);
	}
}
