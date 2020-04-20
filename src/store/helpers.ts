import { put } from 'redux-saga/effects';

import { notificationConstants, showNotification } from 'store/actions/notification';
import { logout } from 'store/actions/auth';
import { NOTIFICATION_TYPES } from 'store/actions/notification/constants';

export function* errorHandler(error, errorCb) {
  if (error.response) {
    if (error.response.status === 401) {
      // TODO: handle auth errors and log out user
      yield put(logout(error.response.data));
    }
    if (error.response.data && error.response.data.message) {
      yield put(
        showNotification({
          message: error.response.data.message,
          type: NOTIFICATION_TYPES.ERROR,
          delay: 4000,
        }),
      );
    }
    yield put(errorCb(error.response.data));

    return null;
  } else if (error.request) {
    // TODO: handle network errors
    //  This could be due to the user's browser being offline or our servers being down
    //  This occured when the URL I sent was undefined
    //  This also occured when the server is offline. I guess advising the user to check their
    //  or contact support if the problem persists is appropriate
  } else {
    // TODO: should we leave this handler? It's rare and means the code is faulty so the request was never step up
    //   We could just tell the user here that there was an unknown error that they should contact support
  }
}

export function* successHandler(response, successCb, notify = true) {
  const data = yield response.data;

  if (notify && response.status >= 200 && response.status < 299) {
    yield put(
      showNotification({
        message: data.message,
        type: notificationConstants.NOTIFICATION_TYPES.SUCCESS,
        duration: 5000,
      }),
    );
  }
  yield put(successCb(data));
}
