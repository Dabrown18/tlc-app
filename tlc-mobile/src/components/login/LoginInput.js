import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

import Spinner from '../../components/Spinner';

export default class LoginInput extends Component {

  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          error: '',
          loading: false,
          showForm: false,
          tokenExists: false,
          loggedIn: null
      };
  }


    login() {

      const { 
        email, 
        password 
      } = this.state;

      this.setState({ 
        error: '', 
        loading: true 
      });

    };

    onLoginSuccess() {
      this.setState({
          email: '',
          password: '',
          loading: false,
          error: ''
      });
    }

    onLoginFail() {
      this.setState({
          error: 'Login Failed',
          loading: false
      });
    }

    renderButton() {

      if (this.state.loading) {
        return <Spinner size='small' />
      }

         return (
              <View style={styles.buttonContainer}>
                <Button
                   onPress={this.login.bind(this)}
                   title='Login'
                   color="#fff"
                />
              </View>
         );
     }

    renderContent() {
      switch (this.state.loggedIn) {

          case true:
            this.props.navigation.navigate('Home')

          case false:
            return <LoginForm />;

          default:
            return <Spinner size='large' />
      }
    }

  render() {
    return (
      <View style={styles.inputContainer}>

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

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          {this.renderButton()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
      margin: 20,
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
    buttonContainer: {
      marginBottom: 8,
      padding: 8,
      borderColor: '#fff',
      backgroundColor: '#89b2e0',
      borderRadius: 8
    },
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
});