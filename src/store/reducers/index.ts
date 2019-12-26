import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import notification from './notification';
import navigation from './navigation';

import auth from './auth';

export default function createRootReducer(history) {
  return combineReducers({
    auth,
    notification,
    navigation,
    router: connectRouter(history),
  });
}
