import React, { Component } from 'react';
import Footer from './Footer';
import Likes from './Likes';
import Advertisement from './Advertisement';
import { Link } from 'react-router-dom';

export default class RightColumn extends Component {
	render() {
		return (
			<div {...this.props}>

	      <div className="alert alert-warning alert-dismissible hidden-md-down" role="alert">
	        <button type="button" className="close" dataDismiss="alert" ariaLabel="Close"><span ariaHidden="true">&times;</span></button>
	        <Link className="alert-link" to="/profile">Visit your profile!</Link> Check your self, you aren't looking well.
	      </div>

	      <Footer className="card card-link-list"/>
	      
	    </div>
		);
	}
}