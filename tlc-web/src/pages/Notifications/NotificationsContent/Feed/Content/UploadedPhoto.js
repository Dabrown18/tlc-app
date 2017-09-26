import React, { Component } from 'react';

export default class UploadedPhoto extends Component {
	render() {
		return (
			<li {...this.props}>
        <span className="icon icon-camera text-muted mr-2 align-self-start"></span>

        <div className="media-body">
          <small className="float-right text-muted">3 min</small>
          <div className="media-heading">
            <a href="#"><strong>Dave Gamache</strong></a> uploaded a photo
          </div>

          <div className="media-body-inline-grid" dataGrid="images">
            <img style={{display: "none"}} dataWidth="640" dataHeight="640" dataAction="zoom" src="../assets/img/instagram_3.jpg" />
          </div>
        </div>
      </li>
		);
	}
}
