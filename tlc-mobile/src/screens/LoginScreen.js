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

import MyButton from '../components/Button/index';
import LoginForm from '../components/login/LoginForm';

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

            <LoginForm navigation={this.props.navigation} />

            <MyButton 
              next 
              style={styles.btn} 
              onPress={this.register}
            >
              <Text style={styles.btnText}>Register</Text>
            </MyButton>

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
  }
});
