import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Header from '../components/Header';
import ShowStory from '../components/feed/ShowStory';

export default class HomeScreen extends Component {

  onViewStory = (story) => {
    console.log(story);
    this.props.navigation.navigate('View', {story});
  };

  render() {
    return (
      <View style={styles.section}>

        <View style={styles.headerSection}>
          <Header />
        </View>

        <View style={styles.contentSection}>
          <ShowStory onViewStory={this.onViewStory} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    flex: 1
  },
  headerSection: {
    flex: 1.08
  },
  contentSection: {
    flex: 8.7
  }
});
