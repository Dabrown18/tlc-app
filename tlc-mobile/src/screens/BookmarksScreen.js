import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class BookmarksScreen extends Component {
  render() {
    return (
			<View style={styles.container}>
				<Text>
				  BookmarksScreen
				</Text>
			</View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1
	}
});