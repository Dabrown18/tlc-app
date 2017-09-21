import React, { Component } from 'react';

export default class Login extends Component {
	render() {
		return (
			<div {...this.props}>
				<div className="container-fluid container-fill-height">
					<div className="container-content-middle">
					  <form role="form" className="mx-auto text-center app-login-form">

					    <a href="../index.html" className="app-brand mb-5">
					      <img src="../assets/img/brand.png" alt="brand" />
					    </a>

					    <div className="form-group">
					      <input className="form-control" placeholder="Username" />
					    </div>

					    <div className="form-group mb-3">
					      <input type="password" className="form-control" placeholder="Password" />
					    </div>

					    <div className="mb-5">
					      <button className="btn btn-primary">Log In</button>
					      <button className="btn btn-secondary">Sign up</button>
					    </div>

					    <footer className="screen-login">
					      <a href="#" className="text-muted">Forgot password</a>
					    </footer>
					  </form>
					</div>
				</div>
			</div>
		);
	}
}
