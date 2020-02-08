import { combineReducers, CombinedState, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';

import notification from 'store/reducers/notification';
import navigation from 'store/reducers/navigation';
import dashboard from 'store/reducers/dashboard';
import auth from 'store/reducers/auth';

export default function createRootReducer(history): Reducer<CombinedState<AppState>> {
  return combineReducers<AppState>({
    auth,
    notification,
    navigation,
    dashboard,
    router: connectRouter(history),
  });
}
