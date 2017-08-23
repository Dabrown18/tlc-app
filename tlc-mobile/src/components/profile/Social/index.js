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
				<Website onPress={() => Linking.openURL('http://www.Triune-health.de')} />
				<Facebook onPress={() => Linking.openURL('https://www.facebook.com/natalia.tash.3')} />
				<Instagram onPress={() => Linking.openURL('https://www.instagram.com/siberian.lady/')} />
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