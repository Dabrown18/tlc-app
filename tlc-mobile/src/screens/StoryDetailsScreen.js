import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  TextInput
} from 'react-native';
import {isEmpty} from '../util/validator';
import StoryActions from '../actions/story';

class StoryDetailsScreen extends Component {

  state = {
    text: ''
  };

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: 'Share Your Story',
    headerLeft:
      <Button
        title='Back'
        onPress={() => { navigation.navigate('Image'); }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />,
    headerRight:
      <Button
        title='Next'
        onPress={() => {  navigation.state.params.nextHandler(); }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />,
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

  componentDidMount() {
    this.props.navigation.setParams({
      nextHandler: this.next
    });
  }

  showError = (msg) => {
    Alert.alert('Add Story', msg);
    return false;
  };

  next = () => {
    const { text } = this.state;
    const { dispatch } = this.props;

    if (isEmpty(text)) {
      this.showError('Please set the details');
      return;
    }

    dispatch(StoryActions.setStoryDetails(text));
    this.props.navigation.navigate('Submit');
  };

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.borderContainer}>

          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text })}
          />

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  borderContainer: {
    flex: 1,
    backgroundColor: '#89b2e0',
    margin: 10,
    borderRadius: 8

  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    textAlign: 'left',
    borderRadius: 8
  }
});

export default connect()(StoryDetailsScreen);
