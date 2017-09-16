import * as ProfileActions from '../actions/profile';
import Immutable from 'seamless-immutable';
import typeToReducer from 'type-to-reducer';

const initialState = Immutable({
  isFetching: false,
  isUpdating: false,
  error: false,
  data: null
});

export default typeToReducer({

  [ProfileActions.GET_CURRENT_USER_PROFILE]: {
    PENDING(state) {
      return state.merge({
        isFetching: true,
        error: false
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        isFetching: false,
        error
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        isFetching: false,
        error: false,
        data: action.payload.user
      });
    },

  },

  [ProfileActions.UPDATE_CURRENT_USER_PROFILE]: {
    PENDING(state) {
      return state.merge({
        isUpdating: true,
        error: false
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        isUpdating: false,
        error
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        isUpdating: false,
        data: action.payload.user
      });
    }
  }
}, initialState);