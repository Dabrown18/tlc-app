import React, { Component } from 'react';
import Title from './Title';
import Traveling from './Traveling';
import Played from './Played';
import Followers from './Followers';
import UploadedPhoto from './UploadedPhoto';
import Flagged from './Flagged';
import Favorites from './Favorites';
import Following from './Following';
import Updated from './Updated';
import Quit from './Quit';

export default class Content extends Component {
	render() {
		return (
			<ul {...this.props}>
        <Title className="list-group-item p-4" />

        <Traveling className="list-group-item media p-4" />

        <Played className="list-group-item media p-4" />

        <Followers className="list-group-item media p-4" />

        <UploadedPhoto className="list-group-item media p-4" />

        <Flagged className="list-group-item media p-4" />

        <Favorites className="list-group-item media p-4" />

        <Following className="list-group-item media p-4" />

        <Updated className="list-group-item media p-4" />

        <Quit className="list-group-item media p-4" />
      </ul>
		);
	}
}
