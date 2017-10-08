import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Button,
  Platform,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import RegisterForm from '../components/register/RegisterForm';
import backgroundImage from '../images/login-background.png'
import RegisterActions from '../actions/register';
import { isValidUsername, isValidEmail, isEmpty } from '../util/validator';

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
  });

  showError = (msg) => {
    Alert.alert('Registration', msg);
    return false;
  };

  validate = (state) => {
    if (!isValidUsername(state.username)) {
      return this.showError('Username should have 2 or more characters');
    }

    if (!isValidEmail(state.email)) {
      return this.showError('Email is invalid');
    }

    if (isEmpty(state.firstName)) {
      return this.showError('First name is a required field');
    }

    if (isEmpty(state.lastName)) {
      return this.showError('Last name is a required field');
    }

    if (isEmpty(state.password)) {
      return this.showError('Password is a required field');
    }

    if (state.password !== state.passwordConf) {
      return this.showError('Password and confirmation do not match');
    }

    return true;
  };

  next = (state) => {
    const { username, firstName, lastName, password, email } = state;
    const { dispatch } = this.props;

    if (this.validate(state)) {
      dispatch(RegisterActions.registerStep1(username, firstName, lastName, email, password));
      this.props.navigation.navigate('PartTwo');
    }
  };

  render() {
    const { registerData } = this.props;

    return (
      <View style={styles.container}>
        <Image source={backgroundImage} style={styles.backgroundImage}>
          <KeyboardAwareScrollView>
            <RegisterForm initState={registerData} onNext={this.next} />
          </KeyboardAwareScrollView>
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

const mapStateToProps = (state) => ({
  registerData: state.register.profile
});

export default connect(mapStateToProps)(Register);