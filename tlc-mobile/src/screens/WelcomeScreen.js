import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Share your story', color: '#03a9f4' },
  { text: 'Get advice', color: '#009688' },
  { text: 'Help others', color: '#03a9f4' },
];

export default class WelcomeScreen extends Component {

  state = {
    fetchingWelcomeState: true,
    welcomePresented: null
  };

  onSlidesComplete = () => {
    AsyncStorage.setItem('welcomePresented', "1");
    this.props.navigation.navigate('Login')
  };

  componentWillMount() {
    AsyncStorage.multiGet(['welcomePresented', 'authToken'])
      .then(([welcomePresented, authToken]) => {
        this.setState({
          fetchingWelcomeState: false,
          welcomePresented
        });

        if (authToken && authToken.length > 0) {
          this.props.navigation.navigate('Home');
        } else if (welcomePresented === '1') {
          this.props.navigation.navigate('Login');
        }
      });
  }

  render() {
    if (this.state.fetchingWelcomeState) return null;

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    );
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1
  },
  container: {
    position: 'absolute',
    backgroundColor: '#202020',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    padding: 5,
    paddingTop: 16,
    bottom: 30,
    right: 10,
    left: 10,
    borderWidth: 1,
    borderColor: '#303030'
  },
  icon: {
    tintColor: '#fff',
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5
  },
  progress: {
    backgroundColor: '#000',
    borderRadius: 7,
    flex: 1,
    height: 14,
    margin: 10,
    marginTop: 2
  },
  progressBar: {
    backgroundColor: '#bf161c',
    borderRadius: 5,
    height: 10,
    margin: 2,
    width: 80,
  }
});
