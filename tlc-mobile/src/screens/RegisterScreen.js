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

  checkUsername = async (username) => {
    const { dispatch } = this.props;

    try {
      const response = await dispatch(RegisterActions.checkUsername(username));
      return response.value.status === 1;
    } catch( e ) {
      return null;
    }
  };

  checkEmail = async (email) => {
    const { dispatch } = this.props;

    try {
      const response = await dispatch(RegisterActions.checkEmail(email));
      return response.value.status === 1;
    } catch( e ) {
      return null;
    }
  };

  /**
   * Please note that this is async, so you treat it as a Promise or call it using "await".
   * @param state
   * @returns {Promise.<boolean>}
   */
  validate = async (state) => {
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

    if (!(await this.checkUsername(state.username))) {
      return this.showError('Username is already taken');
    }

    if (!(await this.checkEmail(state.email))) {
      return this.showError('Email is already taken');
    }

    return true;
  };

  next = (state) => {
    const { username, firstName, lastName, password, email } = state;
    const { dispatch } = this.props;

    if (this.isValidating) return;

    this.isValidating = true;

    this.validate(state)
      .then(isOk => {
        if (isOk) {
          dispatch(RegisterActions.registerStep1(username, firstName, lastName, email, password));
          this.props.navigation.navigate('PartTwo');
        }

        this.isValidating = false;
      });
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