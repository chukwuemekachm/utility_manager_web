import { takeLatest, all, fork, call, put } from 'redux-saga/effects';

import { authConstants, signUpSuccess, signUpError,
  changeUserPasswordFailure, changeUserPasswordSuccess } from 'store/actions/auth';
import {  moveToNextPage } from 'store/actions/navigation';
import { showNotification } from 'store/actions/notification';
import { errorHandler } from 'store/helpers';
import api, { authRequest } from 'services/api';

function* signUpUser(action) {
  try {
    const { data } = yield call([api, 'post'], authRequest.SIGN_UP, action.payload);
    yield put(signUpSuccess(data));
    const payload = {
      nextPageRoute:'/success-feedback',
      data: {
        userData: {
           ...data.data,
        },
        authSuccessType:'SIGN_UP',
      },
    };
    yield put(moveToNextPage(payload));
  } catch (error) {
    yield fork(errorHandler, error, signUpError);
  }
}

function* changeUserPassword(action) {
  try {
    const url = location.href;
    const [resetId] = url.split('?')[0].split('/').splice(-1);
    const {password} = action.payload;

    const data = yield call([api, 'patch'], authRequest.CHANGE_PASSWORD,  {password,resetId});
    yield put(changeUserPasswordSuccess(data))

  } catch (errors) {
    yield put(
        changeUserPasswordFailure(errors.response.data.message)
    );
  }
}

export function* watchSignUpUser() {
  yield takeLatest(authConstants.SIGN_UP_REQUEST, signUpUser);
}



export function* watchChangeUserPassword() {
  yield takeLatest(authConstants.CHANGE_USER_PASSWORD_REQUEST, changeUserPassword);
}

export default function* authSaga() {
  yield all([
    fork(watchSignUpUser),
    fork(watchChangeUserPassword),
  ]);
}
