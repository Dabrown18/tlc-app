import React, { Component } from 'react';

export default class Quit extends Component {
	render() {
		return (
			<li {...this.props}>
        <span className="icon icon-creative-commons-noncommercial-us text-muted mr-2 align-self-start"></span>

        <div className="media-body">
          <small className="float-right text-muted">1 min</small>
          <div className="media-heading">
            <a href="#"><strong>Jacob Thornton</strong></a> quit his job
          </div>
        </div>
      </li>
		);
	}
}
