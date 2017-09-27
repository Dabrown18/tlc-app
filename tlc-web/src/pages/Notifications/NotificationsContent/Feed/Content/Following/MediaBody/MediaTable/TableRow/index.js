import React, { Component } from 'react';
import Column from './Column';

export default class TableRow extends Component {
	render() {
		return (
			<div {...this.props}>
        <Column className="col-lg-6" />
        <div className="col-lg-6">
          <div className="card card-profile">
            <div className="card-header" style={{backgroundImage: "url(../assets/img/instagram_1.jpg)"}}></div>
            <div className="card-block text-center">
              <img className="card-profile-img" src="../assets/img/avatar-mdo.png" />
              <h5 className="card-title">Mark Otto</h5>
              <p className="mb-4">GitHub and Bootstrap. Formerly at Twitter. Huge nerd.</p>
              <button className="btn btn-outline-primary btn-sm">
                <span className="icon icon-add-user"></span> Follow
              </button>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
