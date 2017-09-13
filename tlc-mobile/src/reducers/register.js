import * as RegisterActions from '../actions/register';
import Immutable from 'seamless-immutable';

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

  step: 1
});

export default (state = initialState, action) => {
  switch( action.type ) {
    case RegisterActions.REGISTER_STEP1:
      const { username, email, firstName, lastName, password } = action.payload;

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

    case RegisterActions.REGISTER_STEP2:
      const { ethnicity } = action.payload;

      return state.merge({
        profile: {
          ...state.profile,
          ethnicity
        }
      });

    case RegisterActions.REGISTER_STEP3:
      const { gender, birthDate } = action.payload;

      return state.merge({
        profile: {
          ...state.profile,
          gender,
          birthDate
        }
      });

    default:
      return state;
  }
}

