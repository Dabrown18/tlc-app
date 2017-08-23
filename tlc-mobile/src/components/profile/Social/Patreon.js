import React, { Component } from 'react';
import {
	TouchableOpacity,
	Image,
	StyleSheet
} from 'react-native';

const Icon = require('./images/patreon.png');

export default class Patreon extends Component {
	render() {
		return (
			<TouchableOpacity {...this.props}>
				<Image source={Icon} style={styles.icon} />
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		resizeMode: 'contain',
		marginTop: 5,
		marginRight: 5
	}
});