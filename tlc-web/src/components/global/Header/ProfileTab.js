import React, { Component } from 'react';

export default class ProfileTab extends Component {
	render() {
		return (
			<li className="nav-item ml-2">
        <button className="btn btn-default navbar-btn navbar-btn-avatar" data-toggle="popover">
          <img className="rounded-circle" src="assets/img/avatar-dhg.png" />
        </button>
      </li>
		);
	}
}