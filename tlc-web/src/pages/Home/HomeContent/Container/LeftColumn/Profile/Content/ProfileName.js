import React, { Component } from 'react';

export default class ProfileName extends Component {
	render() {
		return (
			<div {...this.props}>
				<h6 className="card-title">
          <a className="text-inherit" href="profile/index.html">Natalia Kalkopf</a>
        </h6>
			</div>
		);
	}
}