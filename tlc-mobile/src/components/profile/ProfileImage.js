import React, { Component } from 'react';
import {
	Image,
	StyleSheet
} from 'react-native';

import ProfileInfo from './ProfileInfo';
import PickImage from './PickImage';

const profileImage = require('./images/user-profile.jpg');

export default class ProfileImage extends Component {

	constructor(props) {
  	super(props);
  	this.state = {
  		profileImage: ''
  	};
  }

	render() {

		return (
			<Image source={profileImage} style={styles.container}>
				<PickImage />
				<ProfileInfo />
			</Image>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	height: null,
    	width: null,
	}
});
