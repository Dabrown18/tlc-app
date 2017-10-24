import React, { Component } from 'react';
import moment from 'moment';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class CommentsView extends Component {

  renderComment = (comment) => {
    return (
      <View style={styles.comment}>
        <View><Text style={styles.text}>{comment.text}</Text></View>
        <View>
          <Text style={styles.text}>{comment.author.username} - {moment(comment.creationDate).fromNow()}</Text>
        </View>
      </View>
    );
  };

  render() {
    const { story } = this.props;

    return <View style={styles.container}>
      { story.comments && story.comments.length > 0 && story.comments.map(this.renderComment) }
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch'
  },

  comment: {
    margin: 10,
    padding: 5,
    color: '#fff',
    backgroundColor: 'rgba(189, 195, 199,1.0)'
  },

  text: {
    color: '#fff',
  }
});