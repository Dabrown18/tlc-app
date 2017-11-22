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
import UserActions from '../../actions/user';

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

	isFollowing = () => {
		const { mainProfile, profile } = this.props;

    if (!mainProfile.data || !profile.data) return null;

    return mainProfile.data.following.indexOf(profile.data._id) !== -1;
	};

	toggleFollow = () => {
    const { dispatch, isCurrentUser, profile } = this.props;

    if (isCurrentUser) return;

    if (this.isFollowing()) {
      dispatch(UserActions.unFollowUser(profile.data._id));
		} else {
      dispatch(UserActions.followUser(profile.data._id));
		}
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
  	const { profile, mainProfile, isCurrentUser } = this.props;
		const profileImage = this.state.profileImage || PlaceHolderImage;

		return (
			<Image source={profileImage} style={styles.container}>
				<PickImage
					profile={profile}
					onChooseImage={this.onChooseImage}
					onToggleFollow={this.toggleFollow}
					isFollowingOrUnfollowingInProgress={mainProfile.isFollowingOrUnfollowing}
					isFollowing={this.isFollowing()}
					isCurrentUser={isCurrentUser} />
				<ProfileInfo profile={profile} />
			</Image>
		);
	}
}

const mapStateToProps = (state) => ({
	mainProfile: state.profile.main
});

export default connect(mapStateToProps)(ProfileImage);

const styles = StyleSheet.create({
	container: {
		flex: 1,
  	height: null,
  	width: null,
	}
});
