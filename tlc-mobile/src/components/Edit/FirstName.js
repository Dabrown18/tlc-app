import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

export default class Firstname extends Component {

	render() {

		return (
			<View>
				<Text style={styles.textStyle}>FIRSTNAME</Text>
				<TextInput
					value={this.props.value}
					onChangeText={this.props.onChangeText}
          style={styles.input}
        />
      </View>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 12,
		fontWeight: 'bold',
    color: '#000',
    marginBottom: 5
	},
	input: {
  	fontSize: 16,
  	height: 40,
  	padding: 10,
  	marginBottom: 10,
  	backgroundColor: 'rgba(255,255,255,1)',
  	textAlign: 'left',
  	borderRadius: 8
	}
});