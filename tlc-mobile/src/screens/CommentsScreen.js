import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class CommentsScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>CommentsScreen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});