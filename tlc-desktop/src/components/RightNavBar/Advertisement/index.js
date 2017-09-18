import React, { Component } from 'react';

export default class Advertisement extends Component {
	render() {
		return (
			<div className="card mb-4 hidden-md-down" >
        <div className="card-block">
          <h6 className="mb-3">Advertisement</h6>
          <div data-rid="images" data-target-height="150">
            <img className="media-object" data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_2.jpg" />
          </div>
          <p><strong>It might be time to visit Iceland.</strong> Iceland is so chill, and everything looks cool here. Also, we heard the people are pretty nice. What are you waiting for?</p>
          <button className="btn btn-outline-primary btn-sm">Buy a ticket</button>
        </div>
      </div>
		);
	}
}