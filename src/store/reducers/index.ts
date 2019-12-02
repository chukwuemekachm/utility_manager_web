import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import notification from './notification';

import auth from './auth';

export default function createRootReducer(history) {
  return combineReducers({
    auth,
    notification,
    router: connectRouter(history),
  });
}
