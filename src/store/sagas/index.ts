import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import notificationSaga from './notification';
import navigationSaga from './navigation';
import dashboardSaga from './dashboard';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(notificationSaga), fork(navigationSaga), fork(dashboardSaga)]);
}
