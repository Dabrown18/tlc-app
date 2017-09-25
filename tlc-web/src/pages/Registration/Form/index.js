import React, { Component } from 'react';
import Logo from './Logo';
import Username from './Username';
import Email from './Email';
import Firstname from './Firstname';
import Lastname from './Lastname';
import Password from './Password';

export default class Form extends Component {
	render() {
		return (
			<form {...this.props}>
				<Logo />
		    <Username className="form-group" />
		    <Email className="form-group" />
		    <Firstname className="form-group" />
		    <Lastname className="form-group" />
		    <Password className="form-group mb-3" />

		    <div className="mb-5">
		      <button className="btn btn-primary">Next</button>
		    </div>
		    
		  </form>
		);
	}
}
