import React, { Component } from 'react';
import Content from './Content';

const backgroundImage = require('./images/instagram_11.jpg');

export default class ProfileCard extends Component {
	render() {
		return (
			<div {...this.props}>
        <div className="card-header" style={{backgroundImage: 'backgroundImage' }}></div>
        <Content className="card-block text-center" />
      </div>
		);
	}
}