import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import notificationSaga from './notification';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(notificationSaga),
  ]);
}
