import React, { Component } from 'react';
import Content from './Content';

export default class ProfileCard extends Component {
	render() {
		return (
			<div className="card card-profile mb-4">
        <div className="card-header" style={{backgroundImage: "url(assets/img/iceland.jpg);"}}></div>
        <Content />
      </div>
		);
	}
}