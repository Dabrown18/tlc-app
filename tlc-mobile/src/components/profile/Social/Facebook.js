import React, { Component } from 'react';
import {
	TouchableOpacity,
	Image,
	StyleSheet
} from 'react-native';

const Icon = require('./images/facebook.png');

export default class Facebook extends Component {
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