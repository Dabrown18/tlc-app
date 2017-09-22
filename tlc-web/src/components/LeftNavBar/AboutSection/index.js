import React, { Component } from 'react';
import From from './From';
import LivesIn from './LivesIn';
import SocialMedia from './SocialMedia';

export default class About extends Component {
	render() {
		return (
			<div className="card visible-md-block visible-lg-block mb-4">
        <div className="card-block">
          <h6 className="mb-3">About <small>· <a href="#">Edit</a></small></h6>
          <ul className="list-unstyled list-spaced">
            <SocialMedia />
            <LivesIn />
            <From />
          </ul>
        </div>
      </div>
		);
	}
}