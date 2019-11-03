import { takeLatest, all, fork, call } from 'redux-saga/effects';

import { authConstants } from 'store/actions/auth';
import api, { authRequest } from 'services/api';

function* signUpUser(action) {
  try {
    console.log(action, 'signup data ---------')
    const data = yield call([api, 'post'], authRequest.SIGN_UP, action.payload);
    console.log(data, 'signup data ---------')
  } catch (error) {
    console.log(error, 'signup error ---------')
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
