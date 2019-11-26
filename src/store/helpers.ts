import { put } from 'redux-saga/effects';

import { showNotification } from 'store/actions/notification';
import { NOTIFICATION_TYPES } from 'store/actions/notification/constants';

export function* errorHandler(error, errorCb) {
  if (error.response) {
    if (error.status === 401) {
      // TODO: handle auth errors and log out user
    }
    yield put(errorCb(error.response.data));
    if (error.response.data && error.response.data.message) {
      yield put(showNotification({
        message: error.response.data.message,
        type: NOTIFICATION_TYPES.ERROR,
        delay: 4000,
      }));
    }
    return null;
  } else if (error.request) {
    // TODO: handle network errors
    // This could be due to the user's browser being offline or our servers being down
  } else {
    // TODO: should we leave this handler? It's rare and means the code is faulty so the request was never step up
  }
}
