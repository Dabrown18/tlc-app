import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

export default class Follower extends Component {
	render() {
		const { profile } = this.props;
		const followers = profile && profile.data ? profile.data.stats.followers : '...';

		return (
			<TouchableOpacity {...this.props} style={styles.content}>
				<Text style={styles.numberStyle}>{followers}</Text>
				<Text style={styles.textStyle}> Follower{followers > 1 ? 's' : ''}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		paddingRight: 10
	},
	numberStyle: {
		color: '#fff',
  	fontSize: 14,
  	fontWeight: 'bold'
	},
	textStyle: {
  	color: '#fff',
  	fontSize: 14
	}
})
