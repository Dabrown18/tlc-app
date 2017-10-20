import * as StoryActions from '../actions/story';
import Immutable from 'seamless-immutable';
import typeToReducer from 'type-to-reducer';

const initialState = Immutable({
  story: {
    title: '',
    category: '',
    thumbnail: '',
    details: ''
  },

  status: {
    isSaving: false,
    error: false
  }
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

  [StoryActions.SET_STORY_THUMBNAIL](state, action) {
    const { thumbnail }  = action.payload;

    return state.merge({
      story: {
        ...state.story,
        thumbnail
      }
    });
  },

  [StoryActions.SET_STORY_DETAILS](state, action) {
    const { details }  = action.payload;

    return state.merge({
      story: {
        ...state.story,
        details
      }
    });
  },

  [StoryActions.ADD_STORY]: {
    PENDING(state) {
      return state.merge({
        status: {
          isSaving: true,
          error: false
        }
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        status: {
          isSaving: false,
          error
        },
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        status: {
          isSaving: false
        },
        result: action.payload.story
      });
    }
  }
}, initialState);

