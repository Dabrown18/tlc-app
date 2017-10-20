import * as StoryActions from '../actions/story';
import Immutable from 'seamless-immutable';
import typeToReducer from 'type-to-reducer';

const initialState = Immutable({
  story: {
    title: '',
    category: '',
    thumbnail: ''
  },

  status: {
    isSaving: false,
    error: false
  },

  step: 1
});

export default typeToReducer({
  [StoryActions.SET_STORY_TITLE](state, action) {
    const { title } = action.payload;

    return state.merge({
      story: {
        ...state.story,
        title
      }
    });
  },

  [StoryActions.SET_STORY_CATEGORY](state, action) {
    const { category }  = action.payload;

    return state.merge({
      story: {
        ...state.story,
        category
      }
    });
  },

}, initialState);

