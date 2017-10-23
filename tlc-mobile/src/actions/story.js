import { AsyncStorage } from 'react-native';
import Api from '../util/api';

export const SET_STORY_TITLE = 'SET_STORY_TITLE';
export const SET_STORY_CATEGORY = 'SET_STORY_CATEGORY';
export const SET_STORY_THUMBNAIL = 'SET_STORY_THUMBNAIL';
export const SET_STORY_DETAILS = 'SET_STORY_DETAILS';
export const ADD_STORY = 'ADD_STORY';
export const GET_USER_STORIES = 'GET_USER_STORIES';

export default {

  setStoryTitle(title) {
    return {
      type: SET_STORY_TITLE,
      payload: { title }
    };
  },

  setCategory(category) {
    return {
      type: SET_STORY_CATEGORY,
      payload: { category }
    };
  },

  setThumbnail(thumbnail) {
    return {
      type: SET_STORY_THUMBNAIL,
      payload: { thumbnail }
    };
  },

  setStoryDetails(details) {
    return {
      type: SET_STORY_DETAILS,
      payload: { details }
    };
  },

  addStory() {
    return (dispatch, getState) => {
      return AsyncStorage.multiGet(['authToken', 'userId'])
        .then(result => {
          const authToken = result[0][1];
          const userId = result[1][1];
          const { story } = getState().story;

          console.log('thumb', story.thumbnail);

          const data = new FormData();
          data.append('title', story.title);
          data.append('category', story.category);
          data.append('details', story.details);
          data.append('thumbnail', {
            uri: story.thumbnail.uri,
            type: story.thumbnail.mimeType,
            name: 'file'
          });

          const payload = Api.upload(`/stories`, data, authToken);

          return dispatch({
            type: ADD_STORY,
            payload
          });
        });
    }
  },

  getStories() {
    return dispatch => {
      return AsyncStorage.multiGet(['authToken', 'userId'])
        .then(result => {
          const authToken = result[0][1];
          const userId = result[1][1];

          const payload = Api.get(`/users/${userId}/stories`, authToken);

          return dispatch({
            type: GET_USER_STORIES,
            payload
          });
        });
    }
  }
}