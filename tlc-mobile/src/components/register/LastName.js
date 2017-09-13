import React, { Component } from 'react';
import {
	TextInput,
	StyleSheet
} from 'react-native';

export default class LastName extends Component {

	render() {
		return (
			<TextInput
      	value={this.props.value}
      	onChangeText={this.props.onChangeText}
      	autoCorrect={false}
      	placeholder="Last Name"
      	style={styles.input}
    	/>
		);
	}
}

const styles = StyleSheet.create({
	input: {
  	fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    textAlign: 'center',
    borderRadius: 8
	}
});