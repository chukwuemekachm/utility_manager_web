import { combineReducers } from 'redux';

import auth from './auth';

export default function createRootReducer(history) {
  return combineReducers({
    auth,
    history,
  });
}
