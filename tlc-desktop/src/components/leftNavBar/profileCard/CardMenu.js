import React, { Component } from 'react';

export default class CardMenu extends Component {
	render() {
		return (
			<ul className="card-menu">
	      <li className="card-menu-item">
	        <a href="#userModal" className="text-inherit" data-toggle="modal">
	          Followers
	          <h6 className="my-0">12M</h6>
	        </a>
	      </li>

	      <li className="card-menu-item">
	        <a href="#userModal" className="text-inherit" data-toggle="modal">
	          Likes
	          <h6 className="my-0">1</h6>
	        </a>
	      </li>

	      <li className="card-menu-item">
	        <a href="#userModal" className="text-inherit" data-toggle="modal">
	          Comments
	          <h6 className="my-0">1</h6>
	        </a>
	      </li>
	    </ul>
		);
	}
}