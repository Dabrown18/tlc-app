import { combineReducers } from 'redux';
import nav from './nav';
import register from './register';
import session from './session';
import profile from './profile';
import story from './story';
import notification from './notification';

export default combineReducers({
  nav,
  register,
  session,
  profile,
  story,
  notification
});