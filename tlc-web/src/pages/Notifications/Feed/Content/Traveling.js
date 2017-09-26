import React, { Component } from 'react';

export default class Traveling extends Component {
	render() {
		return (
			<li {...this.props}>
        <span className="icon icon-globe text-muted mr-2"></span>

        <div className="media-body">
        <small className="text-muted float-right">1 min</small>
          <div className="media-heading">
            <a href="#"><strong>Dave Gamache</strong></a> went traveling
          </div>
        </div>
      </li>
		);
	}
}
