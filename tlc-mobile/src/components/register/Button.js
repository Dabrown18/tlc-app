import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';

export default class Button extends Component {
	render() {
		return (
			<TouchableOpacity
        style ={styles.container}
        {...this.props}
    	>
      	<Text style={styles.text}>Continue</Text>
    	</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
  	alignSelf: 'stretch',
  	margin: 20,
  	padding: 20,
  	borderColor: '#fff',
  	backgroundColor: '#89b2e0',
  	borderRadius: 8
	},
	text: {
  	fontSize: 16,
  	textAlign: 'center',
  	color: "#fff"
	}
});

