import React, { Component } from 'react';
import {
	TextInput,
	StyleSheet
} from 'react-native';

export default class LastName extends Component {
	constructor(props) {
  	super(props);
  	this.state = {
      lastname: ''
  	};
  }

	render() {
		return (
			<TextInput
				{...this.props}
      	value={this.state.lastname}
      	onChangeText={lastname => this.setState({ lastname })}
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