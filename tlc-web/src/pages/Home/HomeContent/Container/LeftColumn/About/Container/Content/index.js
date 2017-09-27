import React, { Component } from 'react';

import From from './From';
import LivesIn from './LivesIn';
import Social from './Social';

export default class Content extends Component {
	render() {
		return (
			<ul {...this.props}>
        <Social />
        <LivesIn />
        <From />
      </ul>
		);
	}
}
