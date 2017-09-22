import React, { Component } from 'react';
import Header from '../../components/global/Header';
import LeftNavBar from '../../components/LeftNavBar';
import NewsFeed from '../../components/NewsFeed';
import RightNavBar from '../../components/RightNavBar';

export default class Home extends Component {
	render() {
		return (
			<div {...this.props}>
				
				<div className="container pt-4">
				  <div className="row">
				    
				    <LeftNavBar />

				    <NewsFeed />

				    <RightNavBar className="col-lg-3"/>
				    
				  </div>
				</div>
			</div>
		);
	}
}
