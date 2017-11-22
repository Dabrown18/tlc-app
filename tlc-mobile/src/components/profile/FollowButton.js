import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class FollowButton extends Component {

	render() {
		const { isFollowing, isFollowingOrUnfollowingInProgress } = this.props;
		const likedStyles = isFollowing ? styles.following : null;

		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={this.props.onPress}
					style={[styles.button, likedStyles]} 
					underlayColor="#fefefe"
				>
					{ isFollowingOrUnfollowingInProgress ?
						<Text style={styles.btnText}>{isFollowing ? 'Unfollowing...' : 'Following...'}</Text> :
						<Text style={styles.btnText}>{isFollowing ? 'Unfollow' : 'Follow'}</Text> }
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 8,
		paddingRight: 8
	},
	button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(137,178,224,0.5)',
    borderRadius: 14,
    padding: 8,
	},
	btnText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	following: {
		backgroundColor: 'rgba(200,60,60,0.5)',
	}
});