import React, { Component } from 'react';
import ProfileCard from './profileCard/Container';

export default class Container extends Component {
	render() {
		return (
			<div className="col-lg-3">
	      
				<ProfileCard />

	      <div className="card visible-md-block visible-lg-block mb-4">
	        <div className="card-block">
	          <h6 className="mb-3">About <small>· <a href="#">Edit</a></small></h6>
	          <ul className="list-unstyled list-spaced">
	            <li><span className="text-muted icon icon-calendar mr-3"></span>Went to <a href="#">Oh, Canada</a></li>
	            <li><span className="text-muted icon icon-users mr-3"></span>Became friends with <a href="#">Obama</a></li>
	            <li><span className="text-muted icon icon-github mr-3"></span>Worked at <a href="#">Github</a></li>
	            <li><span className="text-muted icon icon-home mr-3"></span>Lives in <a href="#">San Francisco, CA</a></li>
	            <li><span className="text-muted icon icon-location-pin mr-3"></span>From <a href="#">Seattle, WA</a></li>
	          </ul>
	        </div>
	      </div>

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
	    </div>
		);
	}
}