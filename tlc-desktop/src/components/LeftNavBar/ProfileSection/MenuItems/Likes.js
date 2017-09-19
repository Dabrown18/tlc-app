import React, { Component } from 'react';

export default class Likes extends Component {
	render() {
		return (
			<li {...this.props}>
        <a href="#userModal" className="text-inherit" data-toggle="modal">
          Likes
          <h6 className="my-0">1</h6>
        </a>
      </li>
		);
	}
}