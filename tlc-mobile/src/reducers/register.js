import * as RegisterActions from '../actions/register';
import Immutable from 'seamless-immutable';
import typeToReducer from 'type-to-reducer';

const initialState = Immutable({
  profile: {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    ethnicity: '',
    gender: '',
    birthDate: '',
    password: '',
    creationDate: '',
    lastLoginDate: '',
    passwordResetRequestDate: '',
    passwordResetToken: '',
    occupation: '',
    webAddress: '',
    instagram: '',
    twitter: '',
    patreon: '',
    snapchat: ''
  },

  status: {
    isRegistering: false,
    error: false
  },

  step: 1
});

export default typeToReducer({
  [RegisterActions.REGISTER_STEP1](state, action) {
    const {username, email, firstName, lastName, password} = action.payload;

    return state.merge({
      profile: {
        username,
        email,
        firstName,
        lastName,
        password
      },
      step: 2
    });
  },

  [RegisterActions.REGISTER_STEP2](state, action) {
    const {ethnicity} = action.payload;

    return state.merge({
      profile: {
        ...state.profile,
        ethnicity
      }
    });
  },

  [RegisterActions.REGISTER_STEP3](state, action) {
    const {gender, birthDate} = action.payload;

    return state.merge({
      profile: {
        ...state.profile,
        gender,
        birthDate
      }
    });
  },

  [RegisterActions.REGISTER]: {
    PENDING(state) {
      return state.merge({
        status: {
          isRegistering: true
        }
      })
    },

    REJECTED(state, action) {
      return state.merge({
        status: {
          isRegistering: false,
          error: action.payload.error
        }
      })
    },

    FULFILLED(state) {
      return state.merge({
        status: {
          isRegistering: false,
          error: false
        }
      });
    }
  }
}, initialState);

