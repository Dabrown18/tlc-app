import * as StoryActions from '../actions/story';
import Immutable from 'seamless-immutable';
import typeToReducer from 'type-to-reducer';
import _ from 'lodash';

const initialState = Immutable({
  story: {
    title: '',
    category: '',
    thumbnail: '',
    details: ''
  },

  listing: [],

  selectedStoryIndex: -1,
  userId: null,

  status: {
    isSaving: false,
    isAddingComment: false,
    isLoadingStories: false,
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

  [StoryActions.SELECT_STORY](state, action) {
    const { story, userId }  = action.payload;

    return state.merge({
      userId,
      selectedStoryIndex: _.findIndex(state.listing, s => s._id === story._id)
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
  },

  [StoryActions.GET_USER_STORIES]: {
    PENDING(state) {
      return state.merge({
        status: {
          isLoadingStories: true,
          error: false
        }
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        status: {
          isLoadingStories: false,
          error
        },
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        listing: action.payload.stories,
        status: {
          isLoadingStories: false,
          error: false
        },
        result: action.payload.story
      });
    }
  },

  [StoryActions.GET_FEED]: {
    PENDING(state) {
      return state.merge({
        status: {
          isLoadingStories: true,
          error: false
        }
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        status: {
          isLoadingStories: false,
          error
        },
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        listing: action.payload.feed,
        status: {
          isLoadingStories: false,
          error: false
        },
        result: action.payload.story
      });
    }
  },

  [StoryActions.ADD_STORY_COMMENT]: {
    PENDING(state) {
      return state.merge({
        status: {
          ...state.status,
          isAddingComment: true
        }
      });
    },

    REJECTED(state) {
      return state.merge({
        status: {
          ...state.status,
          isAddingComment: false
        }
      });
    },

    FULFILLED(state, action) {
      const { comment } = action.payload;

      return state.merge({
        status: {
          ...state.status,
          isAddingComment: false
        },
        listing: state.listing.map(s => {
          if (s._id === state.selectedStoryIndex) {
            return {
              ...s,
              comments: s.comments.concat(comment)
            }
          }
          return s;
        })
      });
    },

  },
  [StoryActions.DELETE_STORY_COMMENT]: {
    PENDING(state) {
      return state.merge({
        status: {
          ...state.status,
          isRemovingComment: true
        }
      });
    },

    REJECTED(state) {
      return state.merge({
        status: {
          ...state.status,
          isRemovingComment: false
        }
      });
    },

    FULFILLED(state, action) {
      const { storyId, commentId } = action.payload;

      return state.merge({
        status: {
          ...state.status,
          isRemovingComment: false
        },
        listing: state.listing.map(s => {
          if (s._id === storyId) {
            return {
              ...s,
              comments: s.comments.filter(c => c._id !== commentId)
            }
          }
          return s;
        })
      });
    },

  }
}, initialState);

