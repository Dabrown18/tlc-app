import React, { Component } from 'react';

export default class Container extends Component {
	render() {
		return (
			<div className="col-lg-6">

	      <ul className="list-group media-list media-list-stream mb-4">

	        <li className="media list-group-item p-4">
	          <div className="input-group">
	            <input type="text" className="form-control" placeholder="Message" />
	            <div className="input-group-btn">
	              <button type="button" className="btn btn-secondary">
	                <span className="icon icon-camera"></span>
	              </button>
	            </div>
	          </div>
	        </li>

	        <li className="media list-group-item p-4">
	          <img
	            className="media-object d-flex align-self-start mr-3"
	            src="assets/img/avatar-dhg.png" />
	          <div className="media-body">
	            <div className="media-heading">
	              <small className="float-right text-muted">4 min</small>
	              <h6>Dave Gamache</h6>
	            </div>

	            <p>
	              Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
	            </p>

	            <div className="media-body-inline-grid" data-grid="images">
	              <div style={{display: "none"}}>
	                <img data-action="zoom" data-width="1050" data-height="700" src="assets/img/unsplash_1.jpg" />
	              </div>

	              <div style={{display: "none"}}>
	                <img data-action="zoom" data-width="640" data-height="640" src="assets/img/instagram_1.jpg" />
	              </div>

	              <div style={{display: "none"}}>
	                <img data-action="zoom" data-width="640" data-height="640" src="assets/img/instagram_13.jpg" />
	              </div>

	              <div style={{display: "none"}}>
	                <img data-action="zoom" data-width="1048" data-height="700" src="assets/img/unsplash_2.jpg" />
	              </div>
	            </div>

	            <ul className="media-list mb-2">
	              <li className="media mb-3">
	                <img
	                  className="media-object d-flex align-self-start mr-3"
	                  src="assets/img/avatar-fat.jpg" />
	                <div className="media-body">
	                  <strong>Jacon Thornton: </strong>
	                  Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
	                </div>
	              </li>
	              <li className="media">
	                <img
	                  className="media-object d-flex align-self-start mr-3"
	                  src="assets/img/avatar-mdo.png" />
	                <div className="media-body">
	                  <strong>Mark Otto: </strong>
	                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
	                </div>
	              </li>
	            </ul>
	          </div>
	        </li>

	        <li className="media list-group-item p-4">
	          <img
	            className="media-object d-flex align-self-start mr-3"
	            src="assets/img/avatar-fat.jpg" />
	          <div className="media-body">
	            <div className="media-body-text">
	              <div className="media-heading">
	                <small className="float-right text-muted">12 min</small>
	                <h6>Jacob Thornton</h6>
	              </div>
	              <p>
	                Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	              </p>
	            </div>
	          </div>
	        </li>

	        <li className="media list-group-item p-4">
	          <img
	            className="media-object d-flex align-self-start mr-3"
	            src="assets/img/avatar-mdo.png" />
	          <div className="media-body">
	            <div className="media-heading">
	              <small className="float-right text-muted">34 min</small>
	              <h6>Mark Otto</h6>
	            </div>

	            <p>
	              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
	            </p>

	            <div className="media-body-inline-grid" data-grid="images">
	              <img style={{display: "none"}} data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_3.jpg" />
	            </div>

	            <ul className="media-list">
	              <li className="media">
	                <img
	                  className="media-object d-flex align-self-start mr-3"
	                  src="assets/img/avatar-dhg.png" />
	                <div className="media-body">
	                  <strong>Dave Gamache: </strong>
	                  Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
	                </div>
	              </li>
	            </ul>
	          </div>
	        </li>
	      </ul>
	    </div>
		);
	}
}