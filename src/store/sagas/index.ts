/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import navigationSaga from './navigation';
import dashboardSaga from './dashboard';
import settingsSaga from './setting';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(navigationSaga), fork(dashboardSaga), fork(settingsSaga)]);
}
