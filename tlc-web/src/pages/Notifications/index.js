import React, { Component } from 'react';

import Content from './Content';
import Photos from './Photos';
import Trending from './Trending';
import Feed from './Feed';
import ActiveUsers from './ActiveUsers';

export default class Notifications extends Component {
	render() {
		return (

<div className="container pt-4">
  <div className="row">
    <div className="col-lg-3">

      <Content className="list-group mb-4" />

      <Trending className="card hidden-md-down" />

    </div>

    <Feed className="col-lg-6" />

    <div className="col-lg-3">

      <ActiveUsers className="card mb-4 hidden-md-down" />

    </div>
  </div>
</div>


		);
	}
}
