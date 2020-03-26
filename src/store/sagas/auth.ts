/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import {
  authConstants,
  signUpSuccess,
  signUpError,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  changeUserPasswordFailure,
  changeUserPasswordSuccess,
  changeLoggedInUserPasswordFailure,
  changeLoggedInUserPasswordSuccess,
  logout,
  forgotPasswordError,
  forgotPasswordSuccess,
  fetchProfileSuccess,
  fetchProfileError,
  updateProfileSuccess,
  updateProfileError,
} from 'store/actions/auth';

import { errorHandler, successHandler } from 'store/helpers';
import api, { authRequest } from 'services/api';
import { moveToNextPage } from 'store/actions/navigation';
import { STORAGE_KEYS } from 'utils/constants';

function* signUpUser(action) {
  try {
    const response = yield call([api, 'post'], authRequest.SIGN_UP, action.payload);
    const data = yield response.data;
    yield fork(successHandler, response, signUpSuccess);
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

function* callChangeLoggedInUserPassword(action) {
  try {
    const response = yield call([api, 'patch'], authRequest.CHANGE_LOGGED_IN_USER_PASSWORD, action.payload);
    yield put(logout(response.data));
    yield fork(successHandler, response, changeLoggedInUserPasswordSuccess);
  } catch (error) {
    yield fork(errorHandler, error, changeLoggedInUserPasswordFailure);
  }
}
function* forgotPasswordHandler(action) {
  try {
    const requestData = {
      email: action.payload.email,
      redirectURL: `${location.origin}/reset-password`,
    };
    const response = yield call([api, 'patch'], authRequest.FORGOT_PASSWORD, requestData);
    yield fork(successHandler, response, forgotPasswordSuccess);
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

    const response = yield call([api, 'patch'], authRequest.CHANGE_PASSWORD, { password, resetId });
    const payload = {
      nextPageRoute: '/',
      data: {},
    };
    yield fork(successHandler, response, changeUserPasswordSuccess);
    yield put(moveToNextPage(payload));
  } catch (error) {
    yield fork(errorHandler, error, changeUserPasswordFailure);
  }
}
function* loginUser(action) {
  try {
    const response = yield call([api, 'post'], authRequest.LOGIN, action.payload);
    const payload = {
      nextPageRoute: '/dashboard',
      data: {},
    };
    localStorage.setItem(STORAGE_KEYS.IS_USER_AUTHENTICATED, String(true));
    yield fork(successHandler, response, loginSuccess);
    yield put(moveToNextPage(payload));
  } catch (error) {
    yield fork(errorHandler, error, loginError);
  }
}

function* logoutUser(action) {
  try {
    const response = yield call([api, 'delete'], authRequest.LOGIN, action.payload);
    const payload = {
      nextPageRoute: '/',
      data: {
        userData: {},
      },
    };
    localStorage.removeItem(STORAGE_KEYS.IS_USER_AUTHENTICATED);
    yield fork(successHandler, response, logoutSuccess, action.payload.showNotification);
    yield put(moveToNextPage(payload));
  } catch (error) {
    yield fork(errorHandler, error, logoutError);
  }
}

function* fetchProfile(action) {
  try {
    const response = yield call([api, 'get'], authRequest.PROFILE, action.payload);
    yield fork(successHandler, response, fetchProfileSuccess);
  } catch (error) {
    yield fork(errorHandler, error, fetchProfileError);
  }
}

function* updateProfile(action) {
  try {
    const { payload } = action;
    const formData = new FormData();

    formData.set('firstName', payload.firstName);
    formData.set('lastName', payload.lastName);
    formData.set('username', payload.username);

    if (payload.imageFile) {
      formData.append('image', payload.imageFile);
    }
    const response = yield call([api, 'patch'], authRequest.PROFILE, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    yield fork(successHandler, response, updateProfileSuccess);
    const temp = {
      nextPageRoute: '/dashboard',
      data: {},
    };
    yield put(moveToNextPage(temp));
  } catch (error) {
    yield fork(errorHandler, error, updateProfileError);
  }
}

export function* watchCallChangeLoggedInUserPassword() {
  yield takeLatest(authConstants.CHANGE_LOGGED_IN_USER_PASSWORD_REQUEST, callChangeLoggedInUserPassword);
}

export function* watchSignUpUser() {
  yield takeLatest(authConstants.SIGN_UP_REQUEST, signUpUser);
}
export function* watchLoginUser() {
  yield takeLatest(authConstants.LOGIN_REQUEST, loginUser);
}

export function* watchLogoutUser() {
  yield takeLatest(authConstants.LOGOUT_REQUEST, logoutUser);
}

export function* watchForgotPassword() {
  yield takeLatest(authConstants.FORGOT_PASSWORD_REQUEST, forgotPasswordHandler);
}

export function* watchChangeUserPassword() {
  yield takeLatest(authConstants.CHANGE_USER_PASSWORD_REQUEST, changeUserPassword);
}

export function* watchFetchProfile() {
  yield takeLatest(authConstants.FETCH_PROFILE_REQUEST, fetchProfile);
}

export function* watchUpdateProfile() {
  yield takeLatest(authConstants.UPDATE_PROFILE_REQUEST, updateProfile);
}

export default function* authSaga() {
  yield all([
    fork(watchSignUpUser),
    fork(watchChangeUserPassword),
    fork(watchLoginUser),
    fork(watchForgotPassword),
    fork(watchLogoutUser),
    fork(watchFetchProfile),
    fork(watchUpdateProfile),
    fork(watchCallChangeLoggedInUserPassword),
  ]);
}
