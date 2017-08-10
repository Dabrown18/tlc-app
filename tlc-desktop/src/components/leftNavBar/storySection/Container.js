import React, { Component } from 'react';

export default class Container extends Component {
	render() {
		return (
			<div className="card visible-md-block visible-lg-block">
        <div className="card-block">
          <h6 className="mb-3">Photos <small>· <a href="#">Edit</a></small></h6>
          <div data-grid="images" data-target-height="150">
            <div>
              <img data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_5.jpg" />
            </div>

            <div>
              <img data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_6.jpg" />
            </div>

            <div>
              <img data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_7.jpg" />
            </div>

            <div>
              <img data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_8.jpg" />
            </div>

            <div>
              <img data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_9.jpg" />
            </div>

            <div>
              <img data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_10.jpg" />
            </div>
          </div>
        </div>
      </div>
		);
	}
}