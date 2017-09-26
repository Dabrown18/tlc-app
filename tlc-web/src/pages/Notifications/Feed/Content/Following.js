import React, { Component } from 'react';

export default class Following extends Component {
	render() {
		return (
			<li {...this.props}>
        <span className="icon icon-user text-muted mr-2 align-self-start"></span>

        <div className="media-body">
          <small className="float-right text-muted">30 min</small>
          <div className="media-heading">
            You followed <a href="#"><strong>Jacob Thornton</strong></a> and <a href="#"><strong>1 other</strong></a>
          </div>

          <div className="mt-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="card card-profile">
                  <div className="card-header" style={{backgroundImage: "url(../assets/img/instagram_4.jpg)"}}></div>
                  <div className="card-block text-center">
                    <img className="card-profile-img" src="../assets/img/avatar-fat.jpg" />
                    <h5 className="card-title">Jacob Thornton</h5>
                    <p className="mb-4">Big belly rude boy, million dollar hustler. Unemployed.</p>
                    <button className="btn btn-outline-primary btn-sm">
                      <span className="icon icon-add-user"></span> Follow
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-profile">
                  <div className="card-header" style={{backgroundImage: "url(../assets/img/instagram_1.jpg)"}}></div>
                  <div className="card-block text-center">
                    <img className="card-profile-img" src="../assets/img/avatar-mdo.png" />
                    <h5 className="card-title">Mark Otto</h5>
                    <p className="mb-4">GitHub and Bootstrap. Formerly at Twitter. Huge nerd.</p>
                    <button className="btn btn-outline-primary btn-sm">
                      <span className="icon icon-add-user"></span> Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
		);
	}
}
