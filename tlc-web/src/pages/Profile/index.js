import React, { Component } from 'react';
import Navigation from './Navigation';

import Image from '../../img/iceland.jpg';

export default class Profile extends Component {
	render() {
		return (
			<div {...this.props}>
				<div className="profile-header" src={Image}>
				  <div className="container">
				    <div className="container-inner">
				      <img className="rounded-circle media-object" src="../assets/img/avatar-dhg.png" />
				      <h3 className="profile-header-user">Dave Gamache</h3>
				      <p className="profile-header-bio">m
				        I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.
				      </p>
				    </div>
				  </div>

				  <Navigation />
				</div>

				<div className="container my-4" data-grid="images">
				  <div>
				    <img data-width="640" data-height="400" data-action="zoom" src="../assets/img/instagram_5.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_6.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_7.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_8.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_9.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_10.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="400" data-action="zoom" src="../assets/img/instagram_11.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_12.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="400" data-action="zoom" src="../assets/img/instagram_13.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_14.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_15.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_16.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_17.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_18.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="400" data-action="zoom" src="../assets/img/instagram_1.jpg" />
				  </div>

				  <div>
				    <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_2.jpg" />
				  </div>
				</div>

			</div>
		);
	}
}
