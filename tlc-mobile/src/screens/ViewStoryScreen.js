import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  AsyncStorage,
  Button,
  View,
  Text, 
  StyleSheet, 
  Image, 
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Reactions from '../reactions';
import Header from '../components/Header';
import CommentForm from '../components/Story/CommentForm';
import StoryActions from '../actions/story';
import CommentsView from '../components/Story/CommentsView';
import {formatDateTime} from '../util/format';

const photo = require('../reactions/images/marriedCouple.jpg');
const bookmarkImage = require('../images/bookmark.png');
const starImage = require('../images/star.png');

/**
 * Given component props, determines wether the screen has been opened from HomeScreen
 * or another screen (eg. from NotificationScreen).
 * @param props
 * @returns {boolean}
 */
const comingFromHomeScreen = (props) => {
  const { navigation } = props;
  const params = navigation.state.params;

  return !(params && params.storyId);
};

export class ViewStoryScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: <Header showBackButton onBack={() => navigation.goBack()} />,
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

  gotoProfile = async (userId) => {
    try {
      const currentUserId = await AsyncStorage.getItem('userId');
      const isCurrentUser = userId === currentUserId;
      this.props.navigation.navigate('Profile', { userId, isCurrentUser });
    } catch( e ) {
      console.log('Unexpected error happened');
    }
  };

  componentWillMount() {

  }

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
              <Text style={styles.usernameValue} onPress={() => this.gotoProfile(story.user._id)}>{story.user.username}</Text>
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
                  <Image
                    style={styles.btnIcon}
                    source={bookmarkImage}
                    resizeMode="contain" />
                  <Text style={styles.actionBtnText}>Bookmark</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.singleBtnContainer}>
                <TouchableOpacity style={styles.actionBtn}>
                  <Image
                    style={styles.btnIcon}
                    source={starImage}
                    resizeMode="contain" />
                  <Text style={styles.actionBtnText}>Follow</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.reactionsContainer}>
              <Reactions />
            </View>

            <CommentsView
              gotoProfile={this.gotoProfile}
              story={story}
              userId={userId} />

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

const mapStateTopProps = (state, props) => {
  const { story } = state;
  const { selectedStoryIndex } = story;

  let viewStory = null;
  const fromHomeScreen = comingFromHomeScreen(props);

  if (fromHomeScreen) {
    viewStory = selectedStoryIndex !== -1 ? story.listing[selectedStoryIndex] : null;
  } else {
    viewStory = story.viewStory;
  }

  return {
    fromHomeScreen,
    story: viewStory,
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
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 20,
    backgroundColor: '#7aa3db',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 17
  },
  reactionsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },
  btnIcon: {
    width: 12,
    height: 16,
    paddingHorizontal: 10
  }
});
