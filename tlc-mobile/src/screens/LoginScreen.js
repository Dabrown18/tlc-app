import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity,
  Text
} from 'react-native';

import LoginInput from '../components/login/LoginInput';

const backgroundImage = require('../images/login-background.jpg');
const logo = require('../images/logo.png');

export default class LoginScreen extends Component {

  register = () => {
    this.props.navigation.navigate('Register');
  };

  render() {

    return (
      <View style={styles.container}>

        <Image source={backgroundImage} style={styles.backgroundImage}>

            <Image source={logo} style={styles.logo}/>

            <LoginInput />

            <View style={styles.registerContainer}>
              <TouchableOpacity style={styles.registerContainer} onPress={this.register}>
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
            </View>

        </Image>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#faf8ec',
    },
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      width: null,
      paddingTop: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      width: 350,
      height: 100,
      alignItems: 'flex-start',
      justifyContent: 'center',
      resizeMode: 'contain'
    },
    registerContainer: {
      alignSelf: 'stretch',
      margin: 20,
      borderColor: '#fff',
      backgroundColor: '#89b2e0',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8
    },
    registerText: {
      fontSize: 20,
      textAlign: 'center',
      color: "#fff"
    },
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
});
