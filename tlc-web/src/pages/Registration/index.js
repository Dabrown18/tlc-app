import React, { Component } from 'react';
import Form from './Form';

export default class Login extends Component {
	render() {
		return (
			<div {...this.props}>
				<div className="container-fluid container-fill-height">
					<div className="container-content-middle">
					  <Form role="form" className="mx-auto text-center app-login-form" />
					</div>
				</div>
			</div>
		);
	}
}
