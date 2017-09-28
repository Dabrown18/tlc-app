import React, { Component } from 'react';
import Button from './Button';

export default class ButtonContainer extends Component {
	render() {
		return (
			<div {...this.props}>
        <Button className="btn btn-secondary" />
      </div>
		);
	}
}
