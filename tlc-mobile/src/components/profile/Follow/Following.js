import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

export default class Following extends Component {
	render() {
		return (
			<TouchableOpacity {...this.props} style={styles.content}>
				<Text style={styles.numberStyle}>20</Text>
				<Text style={styles.textStyle}> Following</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
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
