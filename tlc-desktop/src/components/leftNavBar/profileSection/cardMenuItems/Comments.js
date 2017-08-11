import React, { Component } from 'react';

export default class Comments extends Component {
	render() {
		return (
			<li {...this.props}>
        <a href="#userModal" className="text-inherit" data-toggle="modal">
          Comments
          <h6 className="my-0">1</h6>
        </a>
      </li>
		);
	}
}