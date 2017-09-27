import React, { Component } from 'react';
import BackgroundImage from './BackgroundImage';
import CardBlock from './CardBlock';

export default class Card extends Component {
	render() {
		return (
			<div {...this.props}>
        <BackgroundImage className="card-header" />
        <CardBlock className="card-block text-center" />
      </div>
		);
	}
}
