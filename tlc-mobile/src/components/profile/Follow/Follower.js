import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

export default class Follower extends Component {
	render() {
		return (
			<TouchableOpacity {...this.props} style={styles.content}>
				<Text style={styles.numberStyle}>14k</Text>
				<Text style={styles.textStyle}> Followers</Text>
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
