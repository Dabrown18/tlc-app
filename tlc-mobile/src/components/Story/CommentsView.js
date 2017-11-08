import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import StoryActions from '../../actions/story';

class CommentsView extends Component {

  renderComment = (comment) => {
    const canDelete = comment.author[0]._id === this.props.userId;

    return (
      <View style={styles.comment}>
        <Image style={styles.userThumbnail} source={{uri: comment.author[0].profilePicture.url}} />
        <View style={styles.commentData}>
          <View>
            <Text style={styles.text}>{comment.author[0].username} - {moment(comment.creationDate).fromNow()}</Text>
          </View>
          <View>
            <Text style={styles.text}>{comment.text}</Text>
          </View>
          <View style={styles.footer}>
            { canDelete && <TouchableHighlight onPress={() => this.onRemove(comment)} style={styles.actions}>
              <Text>Remove</Text>
            </TouchableHighlight> }
          </View>
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

  remove(comment) {
    const { dispatch, story } = this.props;

    dispatch(StoryActions.deleteComment(story._id, comment._id));
  }

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

export default connect()(CommentsView);

const styles = StyleSheet.create({
  container: {
  },

  userThumbnail: {
    flex: 0.2,
    height: 'auto'
  },

  comment: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color: '#444'
  },

  commentData: {
    flex: 0.8,
    padding: 10
  },

  footer: {
    flex: 1,
    flexDirection: 'row'
  },

  text: {
    color: '#444',
    fontWeight: '700',
    flex: 0.5
  },

  actions: {
    flex: 0.5
  }
});