import React, { Component } from 'react';
import {
	TextInput,
	StyleSheet,
  View
} from 'react-native';

export default class Password extends Component {

	render() {
		return (
      <View>
  			<TextInput
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          secureTextEntry={true}
          placeholder={this.props.placeholder || "Password"}
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