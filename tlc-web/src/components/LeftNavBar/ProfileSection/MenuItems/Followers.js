import React, { Component } from 'react';

export default class Followers extends Component {
	render() {
		return (
			<li {...this.props}>
        <a href="#userModal" className="text-inherit" data-toggle="modal">
          Followers
          <h6 className="my-0">12M</h6>
        </a>
      </li>
		);
	}
}