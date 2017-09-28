import React, { Component } from 'react';
import FormControl from './FormControl';
import ButtonContainer from './ButtonContainer';

export default class Input extends Component {
	render() {
		return (
			<div {...this.props}>
        <FormControl className="form-control" />
        <ButtonContainer className="input-group-btn" />
      </div>
		);
	}
}
