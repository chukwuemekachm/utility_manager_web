/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import {
  dashboardConstants,
  fetchUpdateProfileSuccess,
  fetchUpdateProfileError,
  fetchCurrentUserOrganisationsError,
  fetchCurrentUserOrganisationsSuccess,
} from 'store/actions/dashboard';
import { errorHandler, successHandler } from 'store/helpers';
import api, { authRequest, dashboardRequest } from 'services/api';
import { moveToNextPage } from '../actions/navigation';
import { fetchProfileError, fetchProfileSuccess } from '../actions/auth';

function* callFetchMyOrganisations(action) {
  try {
    const response = yield call([api, 'get'], dashboardRequest.ORGANISATION, action.payload);
    yield fork(successHandler, response, fetchCurrentUserOrganisationsSuccess);
  } catch (error) {
    yield fork(errorHandler, error, fetchCurrentUserOrganisationsError);
  }
}

function* callFetchUpdateProfile(action) {
  try {
    const { payload } = action;
    const formData = new FormData();

    formData.set('firstName', payload.firstName);
    formData.set('lastName', payload.lastName);
    formData.set('lastName', payload.lastName);

    if (payload.logo) {
      formData.append('image', payload.image);
    }
    const response = yield call([api, 'patch'], dashboardRequest.UPDATE_PROFILE, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    yield fork(successHandler, response, fetchUpdateProfileSuccess);
    const temp = {
      nextPageRoute: '/dashboard',
      data: {},
    };
    yield put(moveToNextPage(temp));
  } catch (error) {
    yield fork(errorHandler, error, fetchUpdateProfileError);
  }
}

function* callFetchProfile(action) {
  try {
    const response = yield call([api, 'get'], authRequest.PROFILE, action.payload);
    yield fork(successHandler, response, fetchProfileSuccess);
  } catch (error) {
    yield fork(errorHandler, error, fetchProfileError);
  }
}
export function* watchCallFetchUpdateProfile() {
  yield takeLatest(dashboardConstants.UPDATE_PROFILE_REQUEST, callFetchUpdateProfile);
}

export function* watchCallFetchProfile() {
  yield takeLatest(dashboardConstants.PROFILE_REQUEST, callFetchProfile);
}

export function* watchCallFetchMyOrganisations() {
  yield takeLatest(dashboardConstants.ORGANISATION_REQUEST, callFetchMyOrganisations);
}

export default function* dashboardSaga() {
  yield all([fork(watchCallFetchProfile), fork(watchCallFetchMyOrganisations), fork(watchCallFetchUpdateProfile)]);
}
