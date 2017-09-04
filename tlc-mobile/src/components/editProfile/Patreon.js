import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

export default class Patreon extends Component {

	state = {
		PatreonLabel: 'Patreon URL',
	};

	render() {

		const {
			PatreonLabel
		} = this.state;

		return (
			<View>
				<Text style={styles.textStyle}>{PatreonLabel.toUpperCase()}</Text>
				<TextInput
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