import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import notificationSaga from './notification';
import navigationSaga from './navigation';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(notificationSaga),
    fork(navigationSaga),
  ]);
}
