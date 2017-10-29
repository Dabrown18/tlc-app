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
          <Text style={styles.text}>{comment.author[0].username} - {moment(comment.creationDate).fromNow()}</Text>
        </View>
      </View>
    );
  };

  hasComments = () => {
    const { story } = this.props;

    return !(!story.comments || story.comments.length === 0 ||
      (story.comments.length === 1 && story.comments[0].author.length === 0))
  };

  render() {
    const { story } = this.props;

    return <View style={styles.container}>
      { this.hasComments() && story.comments.length > 0 && story.comments.map(this.renderComment) }
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