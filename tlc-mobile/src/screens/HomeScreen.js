import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet
} from 'react-native';

import Header from '../components/Header';
import ShowStory from '../components/feed/ShowStory';
import StoryActions from '../actions/story';

class HomeScreen extends Component {

  onViewStory = (story) => {
    const { dispatch } = this.props;

    dispatch(StoryActions.selectStory(story));
    this.props.navigation.navigate('View');
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

export default connect()(HomeScreen);

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
