import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import {
  fetchProfile,
  fetchProfileError,
  fetchProfileSuccess,
  dashboardConstants,
  fetchCurrentUserOrganisations,
  fetchCurrentUserOrganisationsError,
  fetchCurrentUserOrganisationsSuccess,
} from 'store/actions/dashboard';
import { moveToNextPage } from 'store/actions/navigation';
import { errorHandler } from 'store/helpers';
import api, { dashboardRequest } from 'services/api';

function* callFetchProfile(action) {
  try {
    const { data } = yield call([api, 'get'], dashboardRequest.PROFILE, action.payload);
    yield put(fetchProfileSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchProfileError);
  }
}

function* callFetchMyOrganisations(action) {
  try {
    const { data } = yield call([api, 'get'], dashboardRequest.ORGANISATION, action.payload);
    yield put(fetchCurrentUserOrganisationsSuccess(data.data));
  } catch (error) {
    yield fork(errorHandler, error, fetchCurrentUserOrganisationsError);
  }
}

export function* watchCallFetchProfile() {
  yield takeLatest(dashboardConstants.PROFILE_REQUEST, callFetchProfile);
}

export function* watchCallFetchMyOrganisations() {
  yield takeLatest(dashboardConstants.ORGANISATION_REQUEST, callFetchMyOrganisations);
}

export default function* authSaga() {
  yield all([fork(watchCallFetchProfile), fork(watchCallFetchMyOrganisations)]);
}
