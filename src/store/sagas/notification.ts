import { takeLatest, all, fork, put } from 'redux-saga/effects';

import { notificationConstants, hideNotification } from 'store/actions/notification';
import { sleep } from 'utils/misc';

function* displayNotification(action) {
  sleep(action.payload.delay || 3000); // still don't know if this works as expected
}

export function* watchDisplayNotification() {
  yield takeLatest(notificationConstants.SHOW_NOTIFICATION, displayNotification);
}

export default function* notificationSaga() {
  yield all([fork(watchDisplayNotification)]);
}
