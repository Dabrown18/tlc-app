import React, { Component } from 'react';
import {
	TextInput,
	StyleSheet,
  View
} from 'react-native';

export default class Password extends Component {
	constructor(props) {
  	super(props);
  	this.state = {
      password: '',
      password_confirmation: ''
  	};
  }

	render() {
		return (
      <View>
  			<TextInput
          {...this.props}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
        />

        <TextInput
          {...this.props}
          value={this.state.password_confirmation}
          onChangeText={password_confirmation => this.setState({ password_confirmation })}
          secureTextEntry={true}
          placeholder="Re-Enter Password"
          style={styles.input}
        />
      </View>
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