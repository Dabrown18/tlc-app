import React, { Component } from 'react';

export default class Flagged extends Component {
	render() {
		return (
			<li {...this.props}>
        <span className="icon icon-flag text-muted mr-2 align-self-start"></span>

        <div className="media-body">
          <small className="float-right text-muted">3 min</small>
          <div className="media-heading">
            <a href="#"><strong>Mark Otto</strong></a> flagged your post
          </div>

          <div className="card mt-2">
            <div className="card-block">
              <div className="media">
                <img
                  className="media-object rounded-circle mr-3 align-self-start"
                  src="../assets/img/avatar-fat.jpg" />
                <div className="media-body">
                  <div className="media-body-text">
                    <div className="media-heading">
                      <small className="float-right text-muted">1 hr</small>
                      <h6>Jacob Thornton</h6>
                    </div>
                    Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
