import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import {
  authConstants,
  signUpSuccess,
  signUpError,
  changeUserPasswordFailure,
  changeUserPasswordSuccess,
  forgotPasswordError,
  forgotPasswordSuccess,
} from 'store/actions/auth';
import { moveToNextPage } from 'store/actions/navigation';
import { errorHandler } from 'store/helpers';
import api, { authRequest } from 'services/api';

function* signUpUser(action) {
  try {
    const { data } = yield call([api, 'post'], authRequest.SIGN_UP, action.payload);
    yield put(signUpSuccess(data));
    const payload = {
      nextPageRoute: '/success-feedback',
      data: {
        userData: {
          ...data.data,
        },
        authSuccessType: 'SIGN_UP',
      },
    };
    yield put(moveToNextPage(payload));
  } catch (error) {
    yield fork(errorHandler, error, signUpError);
  }
}

function* forgotPasswordHandler(action) {
  try {
    const requestData = {
      email: action.payload.email,
      redirectURL: `${location.origin}/reset-password`,
    };
    const { data } = yield call([api, 'patch'], authRequest.FORGOT_PASSWORD, requestData);
    yield put(forgotPasswordSuccess(data));
    const payload = {
      nextPageRoute: '/success-feedback',
      data: {
        authSuccessType: 'RESET_PASSWORD',
      },
    };
    yield put(moveToNextPage(payload));
  } catch (error) {
    yield fork(errorHandler, error, forgotPasswordError);
  }
}

function* changeUserPassword(action) {
  try {
    const url = location.href;
    const [resetId] = url
      .split('?')[0]
      .split('/')
      .splice(-1);
    const { password } = action.payload;

    const data = yield call([api, 'patch'], authRequest.CHANGE_PASSWORD, { password, resetId });
    yield put(changeUserPasswordSuccess(data));
  } catch (errors) {
    yield put(changeUserPasswordFailure(errors.response.data.message));
  }
}
function* loginUser(action) {
  try {
    const { data } = yield call([api, 'post'], authRequest.LOGIN, action.payload);
    yield put({
      type: authConstants.LOGIN_SUCCESS,
      payload: data.data,
    });
    const payload = {
      nextPageRoute: '/dashboard',
      data: {
        userData: {
          ...data.data,
        },
      },
    };
    yield put(moveToNextPage(payload));
  } catch (error) {
    const response = yield error.response;
    yield put({
      type: authConstants.LOGIN_ERROR,
      payload: response.data,
    });
  }
}

export function* watchSignUpUser() {
  yield takeLatest(authConstants.SIGN_UP_REQUEST, signUpUser);
}
export function* watchLoginUser() {
  yield takeLatest(authConstants.LOGIN_REQUEST, loginUser);
}

export function* watchForgotPassword() {
  yield takeLatest(authConstants.FORGOT_PASSWORD_REQUEST, forgotPasswordHandler);
}

export function* watchChangeUserPassword() {
  yield takeLatest(authConstants.CHANGE_USER_PASSWORD_REQUEST, changeUserPassword);
}

export default function* authSaga() {
  yield all([fork(watchSignUpUser), fork(watchChangeUserPassword), fork(watchLoginUser), fork(watchForgotPassword)]);
}
