import React, { Component } from 'react';
import {
  Image,
  Button,
  Platform,
  Linking
} from 'react-native';

import { StatNavigation } from '../util/router';

import ProfileContent from '../components/profile/ProfileContent';

export default class ProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: 'Profile',
    headerRight:
      <Button
        title='Settings'
        onPress={() => { navigation.navigate('Settings'); }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />,
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

  render() {
    return (
      <ProfileContent />
    );
  }
}

