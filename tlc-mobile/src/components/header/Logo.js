
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
			<Image
				style={styles.logo}
          		source={logo} 
			/>
		);
	}
}

const styles = StyleSheet.create({
  	logo: {
    	marginTop: 10,
    	width: 50,
    	height: 50,
    	alignItems: 'flex-start',
    	justifyContent: 'center',
    	resizeMode: 'contain'
  	}
});