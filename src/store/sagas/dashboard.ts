/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import {
  dashboardConstants,
  fetchCurrentUserOrganisationsError,
  fetchCurrentUserOrganisationsSuccess,
  createOrganisationSuccess,
  createOrganisationError,
} from 'store/actions/dashboard';
import { errorHandler } from 'store/helpers';
import api, { dashboardRequest } from 'services/api';

function* callFetchMyOrganisations(action) {
  try {
    const { data } = yield call([api, 'get'], dashboardRequest.ORGANISATION, action.payload);
    yield put(fetchCurrentUserOrganisationsSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchCurrentUserOrganisationsError);
  }
}

function* callCreateOrganisation(action) {
  const { payload } = action;
  const formData = new FormData();

  formData.set('name', payload.name);
  formData.set('website', payload.website);
  formData.set('address', payload.address);
  formData.set('displayName', payload.displayName);
  formData.append('logo', payload.imageFile);

  try {
    const { data } = yield call([api, 'post'], dashboardRequest.CREATE_ORGANISATION, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    yield put(createOrganisationSuccess(data));
    window.location.replace('/dashboard');
  } catch (error) {
    yield fork(errorHandler, error, createOrganisationError);
  }
}

export function* watchCallFetchMyOrganisations() {
  yield takeLatest(dashboardConstants.FETCH_ORGANISATION_REQUEST, callFetchMyOrganisations);
}

export function* watchCallCreateOrganisations() {
  yield takeLatest(dashboardConstants.CREATE_ORGANISATION_REQUEST, callCreateOrganisation);
}

export default function* dashboardSaga() {
  yield all([fork(watchCallFetchMyOrganisations), fork(watchCallCreateOrganisations)]);
}
