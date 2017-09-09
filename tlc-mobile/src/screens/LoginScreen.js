import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity
} from 'react-native';

import MyButton from '../components/Button/index';
import LoginForm from '../components/login/LoginForm';

const backgroundImage = require('../images/login-background.png');
const logo = require('../images/logo.png');

export default class LoginScreen extends Component {

  register = () => {
    this.props.navigation.navigate('Register');
  };

  help = () => {
    this.props.navigation.navigate('Help');
  };

  render() {

    return (
      <View style={styles.container}>

        <Image source={backgroundImage} style={styles.backgroundImage}>

            <Image source={logo} style={styles.logo}/>

            <LoginForm />

            <MyButton 
              next 
              style={styles.btn} 
              onPress={this.register}
            >
              <Text style={styles.btnText}>Register</Text>
            </MyButton>
  
            <View style={styles.helpContainer}>
              <Text>Forgot your email or password?</Text>
              <TouchableOpacity onPress={this.help}>
                <Text style={styles.btnHelp}>Get help logging in.</Text>
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
  },
  logo: {
    width: 350,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    marginTop: 70,
    marginBottom: 15,
    margin: 10
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold'
  },
  btn: {
    margin: 10
  },
  helpContainer: {
    alignItems: 'center',
  },
  btnHelp: {
    color: 'rgba(0,122,255,1)'
  }
});
