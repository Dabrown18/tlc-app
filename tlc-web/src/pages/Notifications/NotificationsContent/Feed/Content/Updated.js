import React, { Component } from 'react';

export default class Updated extends Component {
	render() {
		return (
			<li {...this.props}>
        <span className="icon icon-cog text-muted mr-2 align-self-start"></span>

        <div className="media-body">
          <small className="float-right text-muted">30 min</small>
          <div className="media-heading mb-2">
            <a href="#"><strong>Jacob Thornton</strong></a> and <a href="#"><strong>1 other</strong></a> updated their settings
          </div>
          <ul className="avatar-list">
            <li className="avatar-list-item"><img className="rounded-circle" src="../assets/img/avatar-fat.jpg" /></li>
            <li className="avatar-list-item"><img className="rounded-circle" src="../assets/img/avatar-dhg.png" /></li>
          </ul>
        </div>
      </li>
		);
	}
}
