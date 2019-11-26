import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import notification from './notification';

export default function createRootReducer(history) {
  return combineReducers({
    auth,
    notification,
    router: connectRouter(history),
  });
}
