import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  Button,
  View,
  Text, 
  StyleSheet, 
  Image, 
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Reactions from '../reactions';
import CommentForm from '../components/Story/CommentForm';
import StoryActions from '../actions/story';
import CommentsView from '../components/Story/CommentsView';
import {formatDateTime} from '../util/format';

const photo = require('../reactions/images/marriedCouple.jpg');

export class ViewStoryScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#faf8ec'
    },
    title: 'Story Details',
    headerLeft:
      <Button
        title='Back'
        onPress={() => { navigation.navigate('Home'); }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />,
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

  addComment = (text) => {
    const { story } = this.props;
    const { dispatch } = this.props;

    return dispatch(StoryActions.addComment(story._id, text));
  };

  render() {
    const { story, userId } = this.props;

    return (
      <View style={styles.container}>

        <ScrollView>

          <View style={styles.imageContainer}>
            <Image source={{ uri: story.thumbnail.url}} style={styles.photoStyle}/>
          </View>

          <View style={styles.storyMeta}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{story.title}</Text>
            </View>

            <View style={styles.usernameContainer}>
              <Text style={styles.usernameText}>Author:</Text>
              <Text style={styles.usernameValue}>{story.user.username}</Text>
            </View>

            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Date:</Text>
              <Text style={styles.dateValue}>{formatDateTime(story.creationDate)}</Text>
            </View>
          </View>

          <Text style={styles.detailText}>{story.details}</Text>

          <View>
            <View style={styles.actionBtnContainer}>
              <View style={styles.singleBtnContainer}>
                <TouchableOpacity style={styles.actionBtn}>
                  <Text style={styles.actionBtnText}>Bookmark</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.singleBtnContainer}>
                <TouchableOpacity style={styles.actionBtn}>
                  <Text style={styles.actionBtnText}>Follow</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.reactionsContainer}>
              <Reactions />
            </View>

            <CommentsView story={story} userId={userId} />

            <View style={styles.commentContainer}>
              <Text style={styles.commentText}>
                Offer Your Thoughts
              </Text>
              <CommentForm onPost={this.addComment} isAddingComment={this.props.isAddingComment} />
            </View>

          </View>

        </ScrollView>

      </View>

    );
  }
}

const mapStateTopProps = (state) => {
  const { story } = state;
  const { selectedStoryIndex } = story;
  return {
    story: selectedStoryIndex !== -1 ? story.listing[selectedStoryIndex] : null,
    userId: story.userId,
    isAddingComment: story.status.isAddingComment
  }
};

export default connect(mapStateTopProps)(ViewStoryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    padding: 10
  },
  photoStyle: {
    flex: 1,
    height: 200,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 8
  },
  storyMeta: {
    padding: 10,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2
  },
  usernameText: {
    color: '#444',
    fontSize: 15,
    fontWeight: '700',
  },
  usernameValue: {
    paddingHorizontal: 10,
    color: '#89b2e0',
    fontSize: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    paddingVertical: 2,
    fontSize: 15,
    alignItems: 'center'
  },
  dateText: {
    color: '#444',
    fontSize: 15,
    fontWeight: '700',
  },
  dateValue: {
    paddingHorizontal: 10,
    color: '#666',
    fontSize: 15,
  },
  titleContainer: {
    paddingBottom: 5
  },
  titleText: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic'
  },
  detailText: {
    padding: 10
  },
  commentContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: 'rgba(189, 195, 199,1.0)',
    borderRadius: 8
  },
  commentText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#fff'
  },
  actionBtnContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  singleBtnContainer: {
    flex: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  actionBtn: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 20,
    backgroundColor: '#66a0c3',
    padding: 5,
  },
  actionBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 17
  },
  reactionsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  }
});
