import React, { Component } from 'react';
import Footer from './footer/Container';
import Advertisement from './advertisement/Container';

export default class Container extends Component {
	render() {
		return (
			<div {...this.props}>

	      <div className="alert alert-warning alert-dismissible hidden-md-down" role="alert">
	        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <a className="alert-link" href="profile/index.html">Visit your profile!</a> Check your self, you aren't looking well.
	      </div>

	      <Footer className="card card-link-list"/>
	      
	    </div>
		);
	}
}