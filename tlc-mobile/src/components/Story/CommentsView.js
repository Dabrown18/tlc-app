import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image, TouchableOpacity
} from 'react-native';
import StoryActions from '../../actions/story';
import Icon from 'react-native-vector-icons/FontAwesome';

class CommentsView extends Component {

  renderComment = (comment) => {
    const canDelete = comment.author[0]._id === this.props.userId;

    return (
      <View key={comment._id} style={styles.comment}>
        <Image style={styles.userThumbnail} source={{uri: comment.author[0].profilePicture.url}} />
        <View style={styles.commentData}>
          <View style={styles.authorContainer}>
            <Text style={styles.author}>{comment.author[0].firstName} {comment.author[0].lastName}</Text>
            <Text style={styles.date}>{moment(comment.creationDate).fromNow()}</Text>
          </View>
          <View>
            <Text style={styles.text}>{comment.text}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.actionBtn}>
              <TouchableOpacity>
                <Icon size={33} name="flash" />
              </TouchableOpacity>
              <Text style={styles.statsValue}>{comment.numLikes || 0}</Text>
            </View>
            <View style={styles.actionBtn}>
              <TouchableOpacity>
                <Icon size={33} name="comment" />
              </TouchableOpacity>
              <Text style={styles.statsValue}>{comment.numComments || 0}</Text>
            </View>
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
    flex: 0.15,
    height: 'auto',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },

  comment: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  commentData: {
    flex: 0.85,
    padding: 10
  },

  footer: {
    flex: 1,
    flexDirection: 'row'
  },

  authorContainer: {
    flex: 1,
    flexDirection: 'row'
  },

  author: {
    color: '#444',
    fontWeight: '700',
  },

  text: {
    color: '#444',
    fontSize: 15,
    paddingVertical: 5,
  },

  date: {
    color: '#999',
    paddingHorizontal: 5,
  },

  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  statsValue: {
    paddingHorizontal: 10
  }
});