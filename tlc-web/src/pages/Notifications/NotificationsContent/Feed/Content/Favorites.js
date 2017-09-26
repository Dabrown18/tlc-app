import React, { Component } from 'react';

export default class Favorites extends Component {
	render() {
		return (
			<li {...this.props}>
        <span className="icon icon-heart text-muted mr-2 align-self-start"></span>

        <div className="media-body">
          <small className="float-right text-muted">4 hr</small>
          <div className="media-heading mb-2">
            <a href="#"><strong>Mark Otto</strong></a> and <a href="#"><strong>2 others</strong></a> favorited your post
          </div>
          <ul className="avatar-list">
            <li className="avatar-list-item"><img className="rounded-circle" src="../assets/img/avatar-dhg.png" /></li>
            <li className="avatar-list-item"><img className="rounded-circle" src="../assets/img/avatar-mdo.png" /></li>
            <li className="avatar-list-item"><img className="rounded-circle" src="../assets/img/avatar-fat.jpg" /></li>
          </ul>
        </div>
      </li>
		);
	}
}
