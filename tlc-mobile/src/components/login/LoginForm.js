import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Alert,
  StyleSheet
} from 'react-native';

import Email from './Email';
import Password from './Password';
import MyButton from '../Button/index';
import Spinner from '../../components/Spinner';

import Authentication from '../../actions/authentication';
import { isEmpty } from '../../util/validator';

export class LoginForm extends Component {

  static defaultProps = {
    onLoginFail: () => {}
  };

  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
    showForm: false
  };

  showError = (msg) => {
    Alert.alert('Login', msg);
    return false;
  };

  validate = (state) => {
    if (isEmpty(state.email)) {
      return this.showError('Please type your username or email');
    }

    if (isEmpty(state.password)) {
      return this.showError('The password should not be blank');
    }

    return true;
  };

  login = () => {
    const {
      email,
      password
    } = this.state;

    if (!this.validate(this.state)) {
      return false;
    }

    const { dispatch } = this.props;

    dispatch(Authentication.login(email, password))
      .then(response => this.props.onLogin(response))
      .catch(this.props.onLoginFail);
  };

  onLoginFail = () => {
    this.setState({
        error: 'Login Failed',
        loading: false
    });
  };

  renderButton(isLoggingIn) {

    if (isLoggingIn) {
      return <Spinner size='small' />
    }

    return (
      <MyButton login onPress={this.login}>
        <Text style={styles.btnText}>Login</Text>
      </MyButton>
    );
   }

  render() {
    const { session } = this.props;
    const { status } = session;

    return (
      <View style={styles.inputContainer}>

          <Email value={this.state.email} onChangeText={email => this.setState({ email })} />

          <Password value={this.state.password} onChangeText={password => this.setState({ password })} />

          <Text style={styles.errorTextStyle}>
            {status.error && status.error}
          </Text>

          {this.renderButton(status.isLoggingIn)}

      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session
});

export default connect(mapStateToProps)(LoginForm);

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