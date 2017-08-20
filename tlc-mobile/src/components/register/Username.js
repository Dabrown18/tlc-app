import React, { Component } from 'react';
import {
	TextInput,
	StyleSheet
} from 'react-native';

export default class Username extends Component {
	constructor(props) {
  	super(props);
  	this.state = {
      username: ''
  	};
  }

	render() {
		return (
			<TextInput
				{...this.props}
      	value={this.state.username}
      	onChangeText={username => this.setState({ username })}
      	autoCorrect={false}
      	placeholder="Username"
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