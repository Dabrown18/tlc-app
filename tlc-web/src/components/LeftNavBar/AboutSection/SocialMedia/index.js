import React, { Component } from 'react';
import Website from './Website';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Patreon from './Patreon';
import Snapchat from './Snapchat';
import Twitter from './Twitter';

export default class SocialMedia extends Component {
	render() {
		return (
			<div {...this.props}>
				<Website />
				<Facebook />
				<Instagram />
				<Patreon />
				<Snapchat />
				<Twitter />
			</div>
		);
	}
}