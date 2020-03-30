import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import notification from 'store/reducers/notification';
import navigation from 'store/reducers/navigation';
import dashboard from 'store/reducers/dashboard';
import auth from 'store/reducers/auth';
import setting from 'store/reducers/setting';

export default function createRootReducer(history) {
  return combineReducers({
    auth,
    notification,
    navigation,
    dashboard,
    setting,
    router: connectRouter(history),
  });
}
