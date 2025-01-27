import * as AuthActions from '../actions/authentication';
import * as SessionActions from '../actions/session';
import Immutable from 'seamless-immutable';
import typeToReducer from 'type-to-reducer';

const initialState = Immutable({
  authToken: null,
  userId: null,

  status: {
    isLoggingIn: false,
    error: false
  },
  data: null
});

export default typeToReducer({
  [AuthActions.LOGIN]: {
    PENDING(state) {
      return state.merge({
        status: {
          isLoggingIn: true,
          error: true
        },
      });
    },

    REJECTED(state, action) {
      const { error } = action.payload;
      return state.merge({
        status: {
          isLoggingIn: false,
          error
        }
      });
    },

    FULFILLED(state, action) {
      return state.merge({
        status: {
          isLoggingIn: false,
          error: false
        },
        data: action.payload
      });
    }
  },

  [SessionActions.SET_AUTH_DETAILS](state, action) {
    const { authToken, userId } = action.payload;

    return state.merge({
      authToken,
      userId
    });
  }
}, initialState);