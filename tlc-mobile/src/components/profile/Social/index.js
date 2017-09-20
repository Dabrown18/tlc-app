import React, { Component } from 'react';
import _ from 'lodash';
import {
	Image,
	View,
	TouchableOpacity,
	StyleSheet, 
	Linking
} from 'react-native';

import Website from './Website';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Snapchat from './Snapchat';
import Patreon from './Patreon';
import Twitter from './Twitter';

export default class Social extends Component {
	render() {
		const { profile } = this.props;
		const { webAddress, twitter, instagram, facebook, snapchat, patreon } = profile.data;

		return (
			<View style={styles.container}>
				{!_.isEmpty(webAddress) && <Website onPress={() => Linking.openURL(webAddress)} />}
				{!_.isEmpty(twitter) && <Twitter onPress={() => Linking.openURL(twitter)} />}
				{!_.isEmpty(facebook) && <Facebook onPress={() => Linking.openURL(facebook)} />}
				{!_.isEmpty(instagram) && <Instagram onPress={() => Linking.openURL(instagram)} />}
				{!_.isEmpty(snapchat) && <Snapchat onPress={() => Linking.openURL(snapchat)} />}
				{!_.isEmpty(patreon) && <Patreon onPress={() => Linking.openURL(patreon)} />}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	icon: {
		resizeMode: 'contain',
		marginTop: 5,
		marginRight: 5
	}
});