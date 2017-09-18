import React, { Component } from 'react';

export default class Container extends Component {
	render() {
		return (
			<div className="card mb-4 hidden-md-down">
        <div className="card-block">
        <h6 className="mb-3">Likes <small>· <a href="#">View All</a></small></h6>
        <ul className="media-list media-list-stream">
          <li className="media mb-2">
            <img
              className="media-object d-flex align-self-start mr-3"
              src="assets/img/avatar-fat.jpg" />
            <div className="media-body">
              <strong>Jacob Thornton</strong> @fat
              <div className="media-body-actions">
                <button className="btn btn-outline-primary btn-sm">
                  <span className="icon icon-add-user"></span> Follow</button>
              </div>
            </div>
          </li>
           <li className="media">
            <a className="media-left" href="#">
              <img
                className="media-object d-flex align-self-start mr-3"
                src="assets/img/avatar-mdo.png" />
            </a>
            <div className="media-body">
              <strong>Mark Otto</strong> @mdo
              <div className="media-body-actions">
                <button className="btn btn-outline-primary btn-sm">
                  <span className="icon icon-add-user"></span> 
                  	Follow
                </button>
              </div>
            </div>
          </li>
        </ul>
        </div>
        <div className="card-footer">
          Dave really likes these nerds, no one knows why though.
        </div>
      </div>
		);
	}
}