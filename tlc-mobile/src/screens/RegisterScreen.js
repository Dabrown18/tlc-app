import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Button,
  Platform,
  Image,
  ScrollView
} from 'react-native';

import RegisterForm from '../components/register/RegisterForm';
import backgroundImage from '../images/login-background.png'
import RegisterActions from '../actions/register';

const Logo = require('../images/logo.png');

export class Register extends Component {

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

  next = (state) => {
    const { username, firstName, lastName, password } = state;
    const { dispatch } = this.props;

    dispatch(RegisterActions.registerStep1(username, firstName, lastName, password));
    this.props.navigation.navigate('PartTwo');
  };

  render() {
      return (
        <View style={styles.container}>
          <Image source={backgroundImage} style={styles.backgroundImage}>
            <ScrollView>
              <RegisterForm onNext={this.next} />
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
  }
});

export default connect()(Register);