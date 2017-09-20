import React, { Component } from 'react';
import About from './About';
import Help from './Help';
import Terms from './Terms';
import Privacy from './Privacy';
import Cookies from './Cookies';
import Ads from './Ads';
import Info from './Info';
import Brand from './Brand';
import Blog from './Blog';
import Status from './Status';
import Apps from './Apps';
import Jobs from './Jobs';
import Advertise from './Advertise';

export default class Footer extends Component {
	render() {
		return (
			<div {...this.props}>
        <div className="card-block">
          © 2017 The Ladies Champion
          <div className="">
            <About />
            <Help />
            <Terms />
            <Privacy />
            <Cookies />
            <Ads />
            <Info />
            <Brand />
            <Blog />
            <Status />
            <Apps />
            <Jobs />
            <Advertise />
          </div>
        </div>
      </div>
		);
	}
}