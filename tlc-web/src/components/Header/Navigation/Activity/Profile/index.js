import React, { Component } from 'react';
import Button from './Button';

export default class ProfileTab extends Component {
	render() {
		return (
			<li {...this.props}>
        <Button className="btn btn-default navbar-btn navbar-btn-avatar" data-toggle="popover" />
      </li>
		);
	}
}