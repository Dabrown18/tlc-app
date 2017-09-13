import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import Username from './Username';
import FirstName from './FirstName';
import LastName from './LastName';
import Email from './Email';
import Password from './Password';
import MyButton from '../../components/Button/index';

export default class RegisterForm extends Component {

	state = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
		password: ''
	};

	render() {
		return (
      <View>

  			<View 
          {...this.props} 
          style={styles.inputContainer}
        >

        	<Username value={this.state.username} onChangeText={username => this.setState({ username })} />

        	<FirstName value={this.state.firstName} onChangeText={firstName => this.setState({ firstName })} />

        	<LastName value={this.state.lastName}  onChangeText={lastName => this.setState({ lastName })} />

        	<Email value={this.state.email} onChangeText={email => this.setState({ email })} />

        	<Password value={this.state.password} onChangeText={password => this.setState({ password })}  />

        </View>

				<MyButton
					next
					style={styles.btn}
					onPress={() => this.props.onNext(this.state)}
				>
					<Text style={styles.btnText}>Next</Text>
				</MyButton>
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
	},
  btn: {
    margin: 10
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold'
  }
});