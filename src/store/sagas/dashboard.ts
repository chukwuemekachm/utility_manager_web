/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import {
  dashboardConstants,
  fetchCurrentUserOrganisationsError,
  fetchCurrentUserOrganisationsSuccess,
} from 'store/actions/dashboard';
import { errorHandler } from 'store/helpers';
import api, { dashboardRequest } from 'services/api';

function* callFetchMyOrganisations(action) {
  try {
    const { data } = yield call([api, 'get'], dashboardRequest.ORGANISATION, action.payload);
    yield put(fetchCurrentUserOrganisationsSuccess(data.data));
  } catch (error) {
    yield fork(errorHandler, error, fetchCurrentUserOrganisationsError);
  }
}

export function* watchCallFetchMyOrganisations() {
  yield takeLatest(dashboardConstants.ORGANISATION_REQUEST, callFetchMyOrganisations);
}

export default function* dashboardSaga() {
  yield all([fork(watchCallFetchMyOrganisations)]);
}
