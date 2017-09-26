import React, { Component } from 'react';
import Settings from './Settings';

export default class Button extends Component {
	render() {
		return (
			<button {...this.props}>
        <img className="rounded-circle" src="assets/img/avatar-dhg.png" />
      </button>
		);
	}
}
