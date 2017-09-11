import React, { Component } from 'react';
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
		return (
			<View style={styles.container}>
				<Website onPress={() => Linking.openURL('http://boycewatkins.com/')} />
				<Twitter onPress={() => Linking.openURL('https://www.twitter.com/DrBoyceWatkins1')} />
				<Instagram onPress={() => Linking.openURL('https://www.instagram.com/TheRealBoyceWatkins/')} />
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