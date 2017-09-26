import React, { Component } from 'react';

export default class Users extends Component {
	render() {
		return (
			<li {...this.props}>
        <img
          className="media-object img-circle mr-3 align-self-start"
          src="../assets/img/avatar-fat.jpg" />
        <div className="media-body">
          <strong>Jacob Thornton</strong> @fat
          <div className="media-body-actions">
            <button className="btn btn-outline-primary btn-sm">
              <span className="icon icon-add-user"></span> Follow</button>
          </div>
        </div>
      </li>
		);
	}
}
