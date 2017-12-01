import * as ProfileActions from '../actions/profile';
import Immutable from 'seamless-immutable';
import typeToReducer from 'type-to-reducer';
import * as UserActions from '../actions/user';

const initialState = Immutable({
  main: {
    isFollowingOrUnfollowing: false,
    isFetching: false,
    isUpdating: false,
    error: false,
    data: null
  },

  other: {
    isFetching: false,
    isUpdating: false,
    error: false,
    data: null

  },
});

export default typeToReducer({

  [ProfileActions.GET_USER_PROFILE]: {
    PENDING(state) {
      return state.merge({
        other: {
          isFetching: true,
          error: false
        }
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        other: {
          isFetching: true,
          error
        }
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        other: {
          isFetching: false,
          error: false,
          data: action.payload.user
        }
      });
    },
  },

  [ProfileActions.GET_CURRENT_USER_PROFILE]: {
    PENDING(state) {
      return state.merge({
        main: {
          isFetching: true,
          error: false
        }
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        main: {
          isFetching: false,
          error
        }
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        main: {
          isFetching: false,
          error: false,
          data: action.payload.user
        }
      });
    },

  },

  [ProfileActions.UPDATE_CURRENT_USER_PROFILE]: {
    PENDING(state) {
      return state.merge({
        main: {
          isUpdating: true,
          error: false
        }
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        main: {
          isUpdating: false,
          error
        }
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        main: {
          isUpdating: false,
          data: action.payload.user
        }
      });
    }
  },

  [ProfileActions.UPDATE_CURRENT_USER_CATEGORIES]: {
    PENDING(state) {
      return state.merge({
        main: {
          ...state.main,
          isUpdating: true,
          error: false
        }
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        main: {
          ...state.main,
          isUpdating: false,
          error
        }
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        main: {
          ...state.main,
          isUpdating: false,
          data: action.payload.user
        }
      });
    }
  },

  [UserActions.FOLLOW_USER]: {
    PENDING(state) {
      return state.merge({
        main: {
          ...state.main,
          isFollowingOrUnfollowing: true,
          error: false
        }
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        main: {
          ...state.main,
          isFollowingOrUnfollowing: false,
          error
        }
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        main: {
          ...state.main,
          isFollowingOrUnfollowing: false,
          data: action.payload.user
        }
      });
    }
  },

  [UserActions.UNFOLLOW_USER]: {
    PENDING(state) {
      return state.merge({
        main: {
          ...state.main,
          isFollowingOrUnfollowing: true,
          error: false
        }
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        main: {
          ...state.main,
          isFollowingOrUnfollowing: false,
          error
        }
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        main: {
          ...state.main,
          isFollowingOrUnfollowing: false,
          data: action.payload.user
        }
      });
    }
  }

}, initialState);