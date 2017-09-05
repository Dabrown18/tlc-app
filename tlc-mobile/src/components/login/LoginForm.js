import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

// import Email from './Email';
// import Password from './Password';
import MyButton from '../Button/index';
import Spinner from '../../components/Spinner';

import Authentication from '../../actions/authentication';

export class LoginForm extends Component {

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


    login = () => {
      const { 
        email, 
        password 
      } = this.state;

      const { dispatch } = this.props;

      this.setState({
        error: '',
        loading: true
      });

      dispatch(Authentication.login(email, password))
        .then(() => this.onLoginSuccess())
        .catch(() => this.onLoginFail());
    };

    onLoginSuccess = () => {
      this.setState({
          email: '',
          password: '',
          loading: false,
          error: '',
          loggedIn: true
      });
      this.props.navigation.navigate('Home');
    };

    onLoginFail = () => {
      this.setState({
          error: 'Login Failed',
          loading: false
      });
    };

    renderButton() {

      if (this.state.loading) {
        return <Spinner size='small' />
      }

         return (
          <MyButton login onPress={this.login}>
            <Text style={styles.btnText}>Login</Text>
          </MyButton>
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

          {/*<Email onChangeText={email => this.setState({ email })} />*/}

          {/*<Password />*/}

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

export default connect()(LoginForm);

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