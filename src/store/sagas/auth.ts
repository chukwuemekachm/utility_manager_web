import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
<<<<<<< HEAD

import {
  authConstants,
  signUpSuccess,
  signUpError,
  changeUserPasswordFailure,
  changeUserPasswordSuccess,
} from 'store/actions/auth';
import { moveToNextPage } from 'store/actions/navigation';
=======
import {
  authConstants, signUpSuccess, signUpError,
  changeUserPasswordFailure, changeUserPasswordSuccess
} from 'store/actions/auth';
>>>>>>> Minor changes
import { showNotification } from 'store/actions/notification';
import { errorHandler } from 'store/helpers';
import api, { authRequest } from 'services/api';

function* signUpUser(action) {
  try {
    const { data } = yield call(
      [api, 'post'],
      authRequest.SIGN_UP,
      action.payload
    );
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

function* changeUserPassword(action) {
  try {
    const url = location.href;
<<<<<<< HEAD
    const [resetId] = url
      .split('?')[0]
      .split('/')
      .splice(-1);
    const { password } = action.payload;
=======
    const [resetId] = url.split('?')[0].split('/').splice(-1);
    const { password } = action.payload;

    const data = yield call([api, 'patch'], authRequest.CHANGE_PASSWORD, { password, resetId });
    yield put(changeUserPasswordSuccess(data))
>>>>>>> Minor changes

    const data = yield call([api, 'patch'], authRequest.CHANGE_PASSWORD, { password, resetId });
    yield put(changeUserPasswordSuccess(data));
  } catch (errors) {
    yield put(
<<<<<<< HEAD
<<<<<<< HEAD
      changeUserPasswordFailure(errors.response.data.message)
    );
    function* LoginUser(action) {
      try {
        console.log(action, 'Login data ---------');
        const { data } = yield call(
          [api, 'post'],
          authRequest.LOGIN,
          action.payload
        );
        console.log(data.data, 'Login data ---------');
        yield put({
          type: authConstants.LOGIN_SUCCESS,
          payload: data.data
        });
      } catch (error) {
        yield put({
          type: authConstants.LOGIN_ERROR,
          payload: error.response.data
        });
      }
    }
=======
        changeUserPasswordFailure(errors.response.data.message)
    );
=======
      changeUserPasswordFailure(errors.response.data.message)
    )
  }
}
>>>>>>> Minor changes
function* loginUser(action) {
  try {
    const { data } = yield call(
      [api, 'post'],
      authRequest.LOGIN,
      action.payload
    );
    yield put({
      type: authConstants.LOGIN_SUCCESS,
      payload: data.data
    });
  } catch (error) {

    console.log(error, error.response.data);

    yield put({
      type: authConstants.LOGIN_ERROR,
      payload: error.response.data
    });
  }
}

export function* watchSignUpUser() {
  yield takeLatest(authConstants.SIGN_UP_REQUEST, signUpUser);
}
export function* watchLoginUser() {
  yield takeLatest(authConstants.LOGIN_REQUEST, loginUser);
}
>>>>>>> minor changes from PR comment

    export function* watchSignUpUser() {
      yield takeLatest(authConstants.SIGN_UP_REQUEST, signUpUser);
    }
    export function* watchLoginUser() {
      yield takeLatest(authConstants.LOGIN_REQUEST, LoginUser);
    }

    export function* watchChangeUserPassword() {
      yield takeLatest(authConstants.CHANGE_USER_PASSWORD_REQUEST, changeUserPassword);
    }

<<<<<<< HEAD
    export default function* authSaga() {
      yield all([
        fork(watchSignUpUser),
        fork(watchChangeUserPassword), fork(watchLoginUser)
      ]);
    }
=======
export function* watchChangeUserPassword() {
  yield takeLatest(authConstants.CHANGE_USER_PASSWORD_REQUEST, changeUserPassword);
}

export default function* authSaga() {
  yield all([
    fork(watchSignUpUser),
    fork(watchChangeUserPassword),
    fork(watchLoginUser)
  ]);
}   
>>>>>>> Minor changes
