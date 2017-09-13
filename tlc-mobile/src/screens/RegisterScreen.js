import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Platform,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import RegisterForm from '../components/register/RegisterForm';
import MyButton from '../components/Button/index';
import Spinner from '../components/Spinner';
import backgroundImage from '../images/login-background.png'

const Logo = require('../images/logo.png');

export default class Register extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: "Let's Get Started",
    headerLeft:
        <Button
            title='Back'
            onPress={() => { navigation.navigate('Login'); }}
            backgroundColor='rgba(0,0,0,0)'
            color='rgba(0,122,255,1)'
        />,
    style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

  next = () => {
    this.props.navigation.navigate('PartTwo');
  };

    render() {
        return (
          <View style={styles.container}>
            <Image source={backgroundImage} style={styles.backgroundImage}>
              <ScrollView>
                <RegisterForm />
                <MyButton 
                  next 
                  style={styles.btn} 
                  onPress={this.next}
                >
                <Text style={styles.btnText}>Next</Text>
                </MyButton>
              </ScrollView>
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
