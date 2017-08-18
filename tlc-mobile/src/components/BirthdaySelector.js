import React, { Component } from 'react';
import {
	View,
	Picker,
	Text
} from 'react-native';

export default class BirthdaySelector extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	category: 'Technology'
	  };
	}

	render() {
		return (
			<View>
				<Picker>
					
				</Picker>
				<Text>Picker Component</Text>
			</View>
		);
	}
}