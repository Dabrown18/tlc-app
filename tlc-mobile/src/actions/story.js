import Api from '../util/api';

export const SET_STORY_TITLE = 'SET_STORY_TITLE';
export const SET_STORY_CATEGORY = 'SET_STORY_CATEGORY';

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
    }
  }
}