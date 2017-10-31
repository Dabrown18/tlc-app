import React, { Component } from 'react';
import moment from 'moment';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default class CommentsView extends Component {

  renderComment = (comment) => {
    const canDelete = comment.author[0]._id === this.props.userId;

    return (
      <View style={styles.comment}>
        <View><Text style={styles.text}>{comment.text}</Text></View>
        <View style={styles.footer}>
          <Text style={styles.text}>{comment.author[0].username} - {moment(comment.creationDate).fromNow()}</Text>
          { canDelete && <TouchableHighlight onPress={() => this.onRemove(comment)} style={styles.actions}>
            <Text>Remove</Text>
          </TouchableHighlight> }
        </View>
      </View>
    );
  };

  onRemove = (comment) => {
    Alert.alert('', 'Are you sure you want to remove this comment?', [
      { text: 'Yes', onPress: () => this.remove(comment) },
      { text: 'Cancel' }
    ]);
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

  footer: {
    flex: 1,
    flexDirection: 'row'
  },

  text: {
    color: '#fff',
    flex: 0.5
  },

  actions: {
    flex: 0.5
  }
});