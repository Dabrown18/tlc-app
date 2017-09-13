import { combineReducers } from 'redux';
import nav from './nav';
import register from './register';

export default combineReducers({
  nav,
  register
});