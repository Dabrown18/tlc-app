import React, { Component } from 'react';

export default class Followers extends Component {
	render() {
		return (
			<li {...this.props}>
        <span className="icon icon-user text-muted mr-2 align-self-start"></span>

        <div className="media-body">
          <small className="float-right text-muted">34 min</small>
          <div className="media-heading mb-2">
            <a href="#"><strong>Fat</strong></a> and <a href="#"><strong>1 other</strong></a> followed you
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
