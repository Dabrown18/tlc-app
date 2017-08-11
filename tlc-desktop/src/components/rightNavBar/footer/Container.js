import React, { Component } from 'react';

export default class Container extends Component {
	render() {
		return (
			<div {...this.props}>
        <div className="card-block">
          © 2015 The Ladies Champion
          <a href="#">About </a>
          <a href="#">Help </a>
          <a href="#">Terms </a>
          <a href="#">Privacy </a>
          <a href="#">Cookies </a>
          <a href="#">Ads </a>
          <a href="#">Info </a>
          <a href="#">Brand </a>
          <a href="#">Blog </a>
          <a href="#">Status </a>
          <a href="#">Apps </a>
          <a href="#">Jobs </a>
          <a href="#">Advertise </a>
        </div>
      </div>
		);
	}
}