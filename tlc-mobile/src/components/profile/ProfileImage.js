import React, { Component } from 'react';
import {
	Image,
	StyleSheet
} from 'react-native';

import ProfileInfo from './ProfileInfo';
import PickImage from './PickImage';

const PlaceHolderImage = require('./images/user-profile.jpg');

export default class ProfileImage extends Component {

	constructor(props) {
  	super(props);
  	this.state = {
  		profileImage: ''
  	};
  }

	render() {
		const profileImage = this.state.profileImage || PlaceHolderImage;

		return (
			<Image source={profileImage} style={styles.container}>
				<PickImage onChooseImage={profileImage => this.setState({ profileImage })} />
				<ProfileInfo profile={this.props.profile} />
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
