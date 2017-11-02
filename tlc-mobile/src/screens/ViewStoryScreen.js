import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  Button,
  View,
  Text, 
  StyleSheet, 
  Image, 
  ScrollView
} from 'react-native';

import Reactions from '../reactions';
import CommentForm from '../components/Story/CommentForm';
import StoryActions from '../actions/story';
import CommentsView from '../components/Story/CommentsView';

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

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{story.title}</Text>
          </View>

          <View style={styles.usernameContainer}>
            <Text style={styles.usernameText}>
              Username: 
            </Text> 
            <Text> JButler650</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              Date: 
            </Text> 
            <Text> 6/22/2017</Text>
          </View>

          <View>
            <Text style={styles.detailText}>{story.details}</Text>

            <Reactions />

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
    alignItems: 'flex-start',
    paddingTop: 40,
    paddingLeft: 12
  },
  imageContainer: {
    paddingBottom: 10
  },
  photoStyle: {
    width: 350,
    height: 200,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 8
  },
  usernameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  usernameText: {
    color: '#89b2e0',
    fontSize: 17,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 30
  },
  dateText: {
    color: '#89b2e0',
    fontSize: 17,
    fontWeight: 'bold',
  },
  titleContainer: {
    paddingBottom: 5
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 25
  },
  detailText: {
    paddingBottom: 10
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
  }
});
