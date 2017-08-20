import React, { Component } from 'react';
import {
	TextInput,
	StyleSheet
} from 'react-native';

export default class Email extends Component {
	constructor(props) {
  	super(props);
  	this.state = {
      email: ''
  	};
  }

	render() {
		return (
			<TextInput
				{...this.props}
      	value={this.state.email}
      	onChangeText={email => this.setState({ email })}
      	autoCorrect={false}
      	placeholder="Email"
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