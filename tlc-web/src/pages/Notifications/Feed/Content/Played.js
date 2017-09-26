import React, { Component } from 'react';

export default class Played extends Component {
	render() {
		return (
			<li {...this.props}>
        <span className="icon icon-game-controller text-muted mr-2"></span>

        <div className="media-body">
          <small className="float-right text-muted">3 min</small>
          <div className="media-heading">
            <a href="#"><strong>Mark Otto</strong></a> played destiny
          </div>
        </div>
      </li>
		);
	}
}
