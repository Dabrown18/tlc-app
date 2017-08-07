import React, { Component } from 'react';
import {
	View,
	Image,
	StyleSheet
} from 'react-native';

const logo = require('./images/logo.png');

export default class Logo extends Component {
	render() {
		return (
			<Image source={logo} style={styles.logo}/>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	},
	logo: {
		width: 350,
	  	height: 100,
	  	alignItems: 'flex-start',
	  	justifyContent: 'center',
	  	resizeMode: 'contain',
	  	marginBottom: 15
	}
});