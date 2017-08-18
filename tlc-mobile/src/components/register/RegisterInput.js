import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

export default class RegisterInput extends Component {

	constructor(props) {
  	super(props);
  	this.state = {
  		registered: null,
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password_confirmation: ''
  	};
  }

	renderContent() {
  	switch (this.state.registered) {
  		case true:
    		this.props.navigation.navigate('Home')

  		case false:
    		return <RegisterForm />;

  		default:
    		return <Spinner size='large' />
  	}
	}

	render() {
		return (
      <View>

  			<View style={styles.inputContainer}>

        	<TextInput
          	value={this.state.username}
          	onChangeText={username => this.setState({ username })}
          	autoCorrect={false}
          	placeholder="Username"
          	style={styles.input}
        	/>

        	<TextInput
          	value={this.state.firstname}
          	onChangeText={firstname => this.setState({ firstname })}
          	autoCorrect={false}
          	placeholder="First Name"
          	style={styles.input}
        	/>

        	<TextInput
          	value={this.state.lastname}
          	onChangeText={lastname => this.setState({ lastname })}
          	placeholder="Last Name"
          	style={styles.input}
        	/>

        	<TextInput
          	value={this.state.email}
          	onChangeText={email => this.setState({ email })}
          	autoCorrect={false}
          	placeholder="Email"
          	style={styles.input}
        	/>

        	<TextInput
          	value={this.state.password}
          	onChangeText={password => this.setState({ password })}
          	secureTextEntry={true}
          	placeholder="Password"
          	style={styles.input}
        	/>

        	<TextInput
          	value={this.state.password_confirmation}
          	onChangeText={password_confirmation => this.setState({ password_confirmation })}
          	secureTextEntry={true}
          	placeholder="Re-Enter Password"
          	style={styles.input}
        	/>

        </View>

      </View>
		);
	}
}

const styles = StyleSheet.create({
	inputContainer: {
  	margin: 20,
    marginTop: 0,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(137,178,224,0.5)',
    borderRadius: 8
	},
	input: {
  	fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    textAlign: 'center',
    borderRadius: 8
	},
	registerContainer: {
  	alignSelf: 'stretch',
  	margin: 20,
  	padding: 20,
  	borderColor: '#fff',
  	backgroundColor: '#89b2e0',
  	borderRadius: 8
	},
	registerText: {
  	fontSize: 16,
  	textAlign: 'center',
  	color: "#fff"
	},
	errorTextStyle: {
  	fontSize: 20,
  	alignSelf: 'center',
  	color: 'red'
	}
});