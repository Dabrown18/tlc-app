import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/global/header/Container';
import LeftNavBar from './components/leftNavBar/Container';

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="growl" id="app-growl"></div>
					
					<Header />

					<div className="modal fade" id="msgModal" tabindex="-1" role="dialog" aria-labelledby="msgModal" aria-hidden="true">
					  <div className="modal-dialog">
					    <div className="modal-content">
					      <div className="modal-header">
					        <h5 className="modal-title">Messages</h5>
					        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					      </div>

					      <div className="modal-body p-0 js-modalBody">
					        <div className="modal-body-scroller">
					          <div className="media-list media-list-users list-group js-msgGroup">
					            <a href="#" className="list-group-item list-group-item-action">
					              <div className="media">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-fat.jpg" />
					                <div className="media-body">
					                  <strong>Jacob Thornton</strong> and <strong>1 other</strong>
					                  <div className="media-body-secondary">
					                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam &hellip;
					                  </div>
					                </div>
					              </div>
					            </a>
					            <a href="#" className="list-group-item list-group-item-action">
					              <div className="media">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-mdo.png" />
					                <div className="media-body">
					                  <strong>Mark Otto</strong> and <strong>3 others</strong>
					                  <div className="media-body-secondary">
					                    Brunch sustainable placeat vegan bicycle rights yeah…
					                  </div>
					                </div>
					              </div>
					            </a>
					            <a href="#" className="list-group-item list-group-item-action">
					              <div className="media">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-dhg.png" />
					                <div className="media-body">
					                  <strong>Dave Gamache</strong>
					                  <div className="media-body-secondary">
					                    Brunch sustainable placeat vegan bicycle rights yeah…
					                  </div>
					                </div>
					              </div>
					            </a>
					            <a href="#" className="list-group-item list-group-item-action">
					              <div className="media">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-fat.jpg" />
					                <div className="media-body">
					                  <strong>Jacob Thornton</strong> and <strong>1 other</strong>
					                  <div className="media-body-secondary">
					                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam &hellip;
					                  </div>
					                </div>
					              </div>
					            </a>
					            <a href="#" className="list-group-item list-group-item-action">
					              <div className="media">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-mdo.png" />
					                <div className="media-body">
					                  <strong>Mark Otto</strong> and <strong>3 others</strong>
					                  <div className="media-body-secondary">
					                    Brunch sustainable placeat vegan bicycle rights yeah…
					                  </div>
					                </div>
					              </div>
					            </a>
					            <a href="#" className="list-group-item list-group-item-action">
					              <div className="media">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-dhg.png" />
					                <div className="media-body">
					                  <strong>Dave Gamache</strong>
					                  <div className="media-body-secondary">
					                    Brunch sustainable placeat vegan bicycle rights yeah…
					                  </div>
					                </div>
					              </div>
					            </a>
					            <a href="#" className="list-group-item list-group-item-action">
					              <div className="media">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-fat.jpg" />
					                <div className="media-body">
					                  <strong>Jacob Thornton</strong> and <strong>1 other</strong>
					                  <div className="media-body-secondary">
					                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam &hellip;
					                  </div>
					                </div>
					              </div>
					            </a>
					            <a href="#" className="list-group-item list-group-item-action">
					              <div className="media">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-mdo.png" />
					                <div className="media-body">
					                  <strong>Mark Otto</strong> and <strong>3 others</strong>
					                  <div className="media-body-secondary">
					                    Brunch sustainable placeat vegan bicycle rights yeah…
					                  </div>
					                </div>
					              </div>
					            </a>
					            <a href="#" className="list-group-item list-group-item-action">
					              <div className="media">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-dhg.png" />
					                <div className="media-body">
					                  <strong>Dave Gamache</strong>
					                  <div className="media-body-secondary">
					                    Brunch sustainable placeat vegan bicycle rights yeah…
					                  </div>
					                </div>
					              </div>
					            </a>
					          </div>

					          <div className="hidden-xs-up m-3 js-conversation">
					            <ul className="media-list media-list-conversation">
					              <li className="media media-current-user mb-4">
					                <div className="media-body">
					                  <div className="media-body-text">
					                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.
					                  </div>
					                  <div className="media-footer">
					                    <small className="text-muted">
					                      <a href="#">Dave Gamache</a> at 4:20PM
					                    </small>
					                  </div>
					                </div>
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-dhg.png" />
					              </li>

					              <li className="media mb-4">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-fat.jpg" />
					                <div className="media-body">
					                  <div className="media-body-text">
					                   Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
					                  </div>
					                  <div className="media-body-text">
					                   Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
					                  </div>
					                  <div className="media-body-text">
					                   Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
					                  </div>
					                  <div className="media-footer">
					                    <small className="text-muted">
					                      <a href="#">Fat</a> at 4:28PM
					                    </small>
					                  </div>
					                </div>
					              </li>

					              <li className="media mb-4">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-mdo.png" />
					                <div className="media-body">
					                  <div className="media-body-text">
					                   Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.
					                  </div>
					                  <div className="media-body-text">
					                   Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
					                  </div>
					                  <div className="media-footer">
					                    <small className="text-muted">
					                      <a href="#">Mark Otto</a> at 4:20PM
					                    </small>
					                  </div>
					                </div>
					              </li>

					              <li className="media media-current-user mb-4">
					                <div className="media-body">
					                  <div className="media-body-text">
					                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.
					                  </div>
					                  <div className="media-footer">
					                    <small className="text-muted">
					                      <a href="#">Dave Gamache</a> at 4:20PM
					                    </small>
					                  </div>
					                </div>
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-dhg.png" />
					              </li>

					              <li className="media mb-4">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-fat.jpg" />
					                <div className="media-body">
					                  <div className="media-body-text">
					                   Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
					                  </div>
					                  <div className="media-body-text">
					                   Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
					                  </div>
					                  <div className="media-body-text">
					                   Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
					                  </div>
					                  <div className="media-footer">
					                    <small className="text-muted">
					                      <a href="#">Fat</a> at 4:28PM
					                    </small>
					                  </div>
					                </div>
					              </li>

					              <li className="media mb-4">
					                <img className="rounded-circle media-object d-flex align-self-start mr-3" src="assets/img/avatar-mdo.png" />
					                <div className="media-body">
					                  <div className="media-body-text">
					                   Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.
					                  </div>
					                  <div className="media-body-text">
					                   Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
					                  </div>
					                  <div className="media-footer">
					                    <small className="text-muted">
					                      <a href="#">Mark Otto</a> at 4:20PM
					                    </small>
					                  </div>
					                </div>
					              </li>
					            </ul>
					          </div>
					        </div>
					      </div>
					    </div>
					  </div>
					</div>

					<div className="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModal" aria-hidden="true">
					  <div className="modal-dialog">
					    <div className="modal-content">
					      <div className="modal-header">
					        <h4 className="modal-title">Users</h4>
					        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					      </div>

					      <div className="modal-body p-0">
					        <div className="modal-body-scroller">
					          <ul className="media-list media-list-users list-group">
					            <li className="list-group-item">
					              <div className="media w-100">
					                <img className="media-object d-flex align-self-start mr-3" src="assets/img/avatar-fat.jpg" />
					                <div className="media-body">
					                  <button className="btn btn-secondary btn-sm float-right">
					                    <span className="glyphicon glyphicon-user"></span> Follow
					                  </button>
					                  <strong>Jacob Thornton</strong>
					                  <p>@fat - San Francisco</p>
					                </div>
					              </div>
					            </li>
					            <li className="list-group-item">
					              <div className="media w-100">
					                <img className="media-object d-flex align-self-start mr-3" src="assets/img/avatar-dhg.png" />
					                <div className="media-body">
					                  <button className="btn btn-secondary btn-sm float-right">
					                    <span className="glyphicon glyphicon-user"></span> Follow
					                  </button>
					                  <strong>Dave Gamache</strong>
					                  <p>@dhg - Palo Alto</p>
					                </div>
					              </div>
					            </li>
					            <li className="list-group-item">
					              <div className="media w-100">
					                <img className="media-object d-flex align-self-start mr-3" src="assets/img/avatar-mdo.png" />
					                <div className="media-body">
					                  <button className="btn btn-secondary btn-sm float-right">
					                    <span className="glyphicon glyphicon-user"></span> Follow
					                  </button>
					                  <strong>Mark Otto</strong>
					                  <p>@mdo - San Francisco</p>
					                </div>
					              </div>
					            </li>
					          </ul>
					        </div>
					      </div>
					    </div>
					  </div>
					</div>


					<div className="container pt-4">
					  <div className="row">
					    
					    <LeftNavBar />

					    <div className="col-lg-6">

					      <ul className="list-group media-list media-list-stream mb-4">

					        <li className="media list-group-item p-4">
					          <div className="input-group">
					            <input type="text" className="form-control" placeholder="Message" />
					            <div className="input-group-btn">
					              <button type="button" className="btn btn-secondary">
					                <span className="icon icon-camera"></span>
					              </button>
					            </div>
					          </div>
					        </li>

					        <li className="media list-group-item p-4">
					          <img
					            className="media-object d-flex align-self-start mr-3"
					            src="assets/img/avatar-dhg.png" />
					          <div className="media-body">
					            <div className="media-heading">
					              <small className="float-right text-muted">4 min</small>
					              <h6>Dave Gamache</h6>
					            </div>

					            <p>
					              Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					            </p>

					            <div className="media-body-inline-grid" data-grid="images">
					              <div style={{display: "none"}}>
					                <img data-action="zoom" data-width="1050" data-height="700" src="assets/img/unsplash_1.jpg" />
					              </div>

					              <div style={{display: "none"}}>
					                <img data-action="zoom" data-width="640" data-height="640" src="assets/img/instagram_1.jpg" />
					              </div>

					              <div style={{display: "none"}}>
					                <img data-action="zoom" data-width="640" data-height="640" src="assets/img/instagram_13.jpg" />
					              </div>

					              <div style={{display: "none"}}>
					                <img data-action="zoom" data-width="1048" data-height="700" src="assets/img/unsplash_2.jpg" />
					              </div>
					            </div>

					            <ul className="media-list mb-2">
					              <li className="media mb-3">
					                <img
					                  className="media-object d-flex align-self-start mr-3"
					                  src="assets/img/avatar-fat.jpg" />
					                <div className="media-body">
					                  <strong>Jacon Thornton: </strong>
					                  Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
					                </div>
					              </li>
					              <li className="media">
					                <img
					                  className="media-object d-flex align-self-start mr-3"
					                  src="assets/img/avatar-mdo.png" />
					                <div className="media-body">
					                  <strong>Mark Otto: </strong>
					                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
					                </div>
					              </li>
					            </ul>
					          </div>
					        </li>

					        <li className="media list-group-item p-4">
					          <img
					            className="media-object d-flex align-self-start mr-3"
					            src="assets/img/avatar-fat.jpg" />
					          <div className="media-body">
					            <div className="media-body-text">
					              <div className="media-heading">
					                <small className="float-right text-muted">12 min</small>
					                <h6>Jacob Thornton</h6>
					              </div>
					              <p>
					                Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					              </p>
					            </div>
					          </div>
					        </li>

					        <li className="media list-group-item p-4">
					          <img
					            className="media-object d-flex align-self-start mr-3"
					            src="assets/img/avatar-mdo.png" />
					          <div className="media-body">
					            <div className="media-heading">
					              <small className="float-right text-muted">34 min</small>
					              <h6>Mark Otto</h6>
					            </div>

					            <p>
					              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
					            </p>

					            <div className="media-body-inline-grid" data-grid="images">
					              <img style={{display: "none"}} data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_3.jpg" />
					            </div>

					            <ul className="media-list">
					              <li className="media">
					                <img
					                  className="media-object d-flex align-self-start mr-3"
					                  src="assets/img/avatar-dhg.png" />
					                <div className="media-body">
					                  <strong>Dave Gamache: </strong>
					                  Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
					                </div>
					              </li>
					            </ul>
					          </div>
					        </li>
					      </ul>
					    </div>
					    <div className="col-lg-3">
					      <div className="alert alert-warning alert-dismissible hidden-md-down" role="alert">
					        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					        <a className="alert-link" href="profile/index.html">Visit your profile!</a> Check your self, you aren't looking well.
					      </div>

					      <div className="card mb-4 hidden-md-down">
					        <div className="card-block">
					          <h6 className="mb-3">Sponsored</h6>
					          <div data-grid="images" data-target-height="150">
					            <img className="media-object" data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_2.jpg" />
					          </div>
					          <p><strong>It might be time to visit Iceland.</strong> Iceland is so chill, and everything looks cool here. Also, we heard the people are pretty nice. What are you waiting for?</p>
					          <button className="btn btn-outline-primary btn-sm">Buy a ticket</button>
					        </div>
					      </div>

					      <div className="card mb-4 hidden-md-down">
					        <div className="card-block">
					        <h6 className="mb-3">Likes <small>· <a href="#">View All</a></small></h6>
					        <ul className="media-list media-list-stream">
					          <li className="media mb-2">
					            <img
					              className="media-object d-flex align-self-start mr-3"
					              src="assets/img/avatar-fat.jpg" />
					            <div className="media-body">
					              <strong>Jacob Thornton</strong> @fat
					              <div className="media-body-actions">
					                <button className="btn btn-outline-primary btn-sm">
					                  <span className="icon icon-add-user"></span> Follow</button>
					              </div>
					            </div>
					          </li>
					           <li className="media">
					            <a className="media-left" href="#">
					              <img
					                className="media-object d-flex align-self-start mr-3"
					                src="assets/img/avatar-mdo.png" />
					            </a>
					            <div className="media-body">
					              <strong>Mark Otto</strong> @mdo
					              <div className="media-body-actions">
					                <button className="btn btn-outline-primary btn-sm">
					                  <span className="icon icon-add-user"></span> 
					                  	Follow
					                </button>
					              </div>
					            </div>
					          </li>
					        </ul>
					        </div>
					        <div className="card-footer">
					          Dave really likes these nerds, no one knows why though.
					        </div>
					      </div>

					      <div className="card card-link-list">
					        <div className="card-block">
					          © 2015 Bootstrap
					          <a href="#">About</a>
					          <a href="#">Help</a>
					          <a href="#">Terms</a>
					          <a href="#">Privacy</a>
					          <a href="#">Cookies</a>
					          <a href="#">Ads </a>
					          <a href="#">Info</a>
					          <a href="#">Brand</a>
					          <a href="#">Blog</a>
					          <a href="#">Status</a>
					          <a href="#">Apps</a>
					          <a href="#">Jobs</a>
					          <a href="#">Advertise</a>
					        </div>
					      </div>
					    </div>
					  </div>
					</div>

			</div>
		);
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);
