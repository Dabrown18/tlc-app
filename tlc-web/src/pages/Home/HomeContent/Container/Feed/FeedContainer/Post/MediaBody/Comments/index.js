import React, { Component } from 'react';

export default class Comments extends Component {
	render() {
		return (
			<ul {...this.props}>
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
		);
	}
}
