import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<div {...this.props}>
				<div class="container-fluid container-fill-height">
					<div class="container-content-middle">
					  <form role="form" class="mx-auto text-center app-login-form">

					    <a href="../index.html" class="app-brand mb-5">
					      <img src="../assets/img/brand.png" alt="brand" />
					    </a>

					    <div class="form-group">
					      <input class="form-control" placeholder="Username" />
					    </div>

					    <div class="form-group mb-3">
					      <input type="password" class="form-control" placeholder="Password" />
					    </div>

					    <div class="mb-5">
					      <button class="btn btn-primary">Log In</button>
					      <button class="btn btn-secondary">Sign up</button>
					    </div>

					    <footer class="screen-login">
					      <a href="#" class="text-muted">Forgot password</a>
					    </footer>
					  </form>
					</div>
				</div>
			</div>
		);
	}
}
