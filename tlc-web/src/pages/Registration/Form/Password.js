import React, { Component } from 'react';

export default class Password extends Component {
	render() {
		return (
			<div {...this.props}>
				<div className="form-group mb-3">
					<input type="password" className="form-control" placeholder="Password" />
				</div>
	      
	      <div className="form-group mb-3">
					<input type="password" className="form-control" placeholder="Re-enter Password" />
				</div>
	    </div>
		);
	}
}
