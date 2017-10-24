import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import MyButton from '../../components/Button/index';

export default class CommentForm extends Component {

  state = {
    text: ''
  };

  post = () => {
    this.props.onPost(this.state.text)
      .then(() => {
        this.setState({
          text: ''
        });
      });
  };

  render() {
    return <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
      <MyButton
        info
        style={styles.btn}
        onPress={this.post}
      >
        <Text style={styles.btnText}>Post</Text>
      </MyButton>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch'
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  btn: {
    textAlign: 'center'
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
    color: "#fff",
  }
});