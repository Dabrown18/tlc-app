import React, { Component } from 'react';

export default class Mentions extends Component {
	render() {
		return (
			<div {...this.props}>
				<a href="#" className="list-group-item list-group-item-action justify-content-between">
          <span>Mentions</span>
          <span className="icon icon-chevron-thin-right"></span>
        </a>
      </div>
		);
	}
}
