import React, { Component } from 'react';

export default class Space extends Component {
	render() {
		return (
			<div {...this.props} data-grid="images">
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
		);
	}
}
