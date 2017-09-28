import React, { Component } from 'react';
import Media from './Media';
import Post from './Post';

export default class FeedContainer extends Component {
	render() {
		return (
			<ul {...this.props}>

        <Media className="media list-group-item p-4" />

        <Post className="media list-group-item p-4" />

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
		);
	}
}
