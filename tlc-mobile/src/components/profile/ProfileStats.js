import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import Followers from './Followers';
import Likes from './Likes';
import Comments from './Comments';

import FollowersScreen from '../../screens/FollowersScreen';

export default class ProfileStats extends Component {

  followers = () => {
    this.props.navigation.navigate('FollowersScreen');
  };

  likes = () => {
    this.props.navigation.navigate('Likes');
  };

  comments = () => {
    this.props.navigation.navigate('Comments');
  };

  render() {
    return (
      <View style={styles.stats}>
        <Followers onPress={this.followers}/>
        <Likes onPress={this.likes}/>
        <Comments onPress={this.comments}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  stats: {
    flexDirection: 'row',
  },
  stat: {
    alignItems: 'center',
    backgroundColor: '#faf8ec',
    borderColor: '#b1afa4',
    borderLeftWidth: 1,
    flex: 1,
    padding: 10,
  },
    icon: {
      tintColor: '#d6d3c5',
      height: 30,
      width: 30,
    },
    selected: {
      tintColor: '#88b0d3',
    },
    counter: {
      color: '#000',
      fontSize: 15,
      marginTop: 5,
    }
});