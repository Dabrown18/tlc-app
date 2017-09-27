import React, { Component } from 'react';
import Logo from './Logo';
import Username from './Username';
import Password from './Password';
import Help from './Help';

export default class Form extends Component {
	render() {
		return (
			<form {...this.props}>

		    <Logo />

		    <Username className="form-group" />

		    <Password className="form-group mb-3" />

		    <div className="mb-5">
		      <button className="btn btn-primary">Log In</button>
		      <button className="btn btn-secondary">Sign up</button>
		    </div>

		    <Help className="screen-login" />
		    
		  </form>
		);
	}
}
