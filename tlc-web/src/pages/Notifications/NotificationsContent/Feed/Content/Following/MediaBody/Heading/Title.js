import React, { Component } from 'react';

export default class Title extends Component {
	render() {
		return (
			<div {...this.props}>
        You followed <a href="#"><strong>Jacob Thornton</strong></a> and <a href="#"><strong>1 other</strong></a>
      </div>
		);
	}
}
