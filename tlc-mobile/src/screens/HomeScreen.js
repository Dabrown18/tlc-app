import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Header from '../components/header';
import ShowStory from '../components/feed/ShowStory';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.section}>

        <View style={styles.headerSection}>
          <Header />
        </View>

        <View style={styles.contentSection}>
          <ShowStory />
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
