import React, { Component } from 'react';

export default class Help extends Component {
	render() {
		return (
			<footer {...this.props}>
	      <a href="#" className="text-muted">Forgot password?</a>
	    </footer>
		);
	}
}
