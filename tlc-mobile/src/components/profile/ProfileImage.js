import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileActions from '../../actions/profile';
import {
	Alert,
	Image,
	StyleSheet
} from 'react-native';

import ProfileInfo from './ProfileInfo';
import PickImage from './PickImage';

const PlaceHolderImage = require('./images/user-profile.jpg');

export class ProfileImage extends Component {

	constructor(props) {
  	super(props);
  	this.state = {
  		profileImage: ''
  	};
  }

  onChooseImage = (profileImage) => {
		const { dispatch } = this.props;

		dispatch(ProfileActions.updateCurrentUserProfilePicture(profileImage.uri, 'image/jpeg'))
			.then(() => {
        this.setState({ profileImage });
        Alert.alert('', 'Profile picture updated with success!')
			})
			.catch(() => {
				Alert.alert('', 'Failed to update profile picture');
			});
	};

  componentWillReceiveProps(nextProps) {
		if (this.props.profile !== nextProps.profile) {
			if (nextProps.profile && nextProps.profile.data && nextProps.profile.data.profilePicture) {
        this.setState({
          profileImage: {
            uri: nextProps.profile.data.profilePicture.url
          }
        });
			}
		}
  }

  render() {
		const profileImage = this.state.profileImage || PlaceHolderImage;

		return (
			<Image source={profileImage} style={styles.container}>
				<PickImage onChooseImage={this.onChooseImage} />
				<ProfileInfo profile={this.props.profile} />
			</Image>
		);
	}
}

export default connect()(ProfileImage);

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	height: null,
    	width: null,
	}
});
