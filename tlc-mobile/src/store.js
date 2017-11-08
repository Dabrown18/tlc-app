import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

const middleware = [
  reduxThunk,
  promiseMiddleware()
];

if (__DEV__) {
  middleware.push(createLogger);
}

export default createStore(reducers, applyMiddleware(...middleware));