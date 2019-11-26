import { takeLatest, all, fork, call, put } from 'redux-saga/effects';

import { authConstants, signUpSuccess, signUpError } from 'store/actions/auth';
import { showNotification } from 'store/actions/notification';
import { errorHandler } from 'store/helpers';
import api, { authRequest } from 'services/api';

function* signUpUser(action) {
  try {
    const { data } = yield call([api, 'post'], authRequest.SIGN_UP, action.payload);
    yield put(signUpSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, signUpError);
  }
}

export function* watchSignUpUser() {
  yield takeLatest(authConstants.SIGN_UP_REQUEST, signUpUser);
}

export default function* authSaga() {
  yield all([
    fork(watchSignUpUser),
  ]);
}
