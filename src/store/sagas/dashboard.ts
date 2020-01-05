import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import {
  retrieveProfile,
  retrieveProfileError,
  retrieveProfileSuccess,
  dashboardConstants,
} from 'store/actions/dashboard';
import { moveToNextPage } from 'store/actions/navigation';
import { errorHandler } from 'store/helpers';
import api, { dashboardRequest } from 'services/api';

function* callRetrieveProfile(action) {
  try {
    const { data } = yield call([api, 'get'], dashboardRequest.PROFILE, action.payload);
    yield put(retrieveProfileSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, retrieveProfileError);
  }
}

export function* watchCallRetrieveProfile() {
  yield takeLatest(dashboardConstants.PROFILE_REQUEST, callRetrieveProfile);
}

export default function* authSaga() {
  yield all([fork(watchCallRetrieveProfile)]);
}
