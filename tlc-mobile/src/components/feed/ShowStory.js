import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import NewsFeed from './NewsFeed';

export default class ShowStory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'newsFeed'
    };
  }

  render() {
    
    return (
      <View style={styles.container}>
        <NewsFeed
          onViewStory={this.props.onViewStory}
          selected={this.state.tab === 'newsFeed'}
          onPress={() => this.setState({ tab: 'newsFeed' })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
