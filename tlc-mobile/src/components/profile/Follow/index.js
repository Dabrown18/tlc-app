import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import Follower from './Follower';
import Following from './Following';

export default class Follow extends Component {
	render() {
		const { profile } = this.props;

		return (
			<View style={styles.content}>
					<Follower profile={profile} />
					<Following profile={profile} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
 	marginTop: 10,
 	marginBottom: -12,
	}
})
