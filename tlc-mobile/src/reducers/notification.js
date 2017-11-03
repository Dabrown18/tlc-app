import Immutable from 'seamless-immutable';
import typeToReducer from 'type-to-reducer';
import * as NotificationActions from '../actions/notification';

const initialState = Immutable({
  listing: [],
  status: {
    isRemoving: false,
    isLoading: false,
    error: false
  }
});

export default typeToReducer({
  [NotificationActions.GET_USER_NOTIFICATIONS]: {
    PENDING(state) {
      return state.merge({
        status: {
          isLoading: true,
          error: false
        }
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        status: {
          isLoading: false,
          error
        },
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        listing: action.payload.notifications,
        status: {
          isLoading: false,
          error: false
        }
      });
    }
  }
}, initialState);