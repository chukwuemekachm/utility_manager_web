/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, fork, call, put } from 'redux-saga/effects';

import {
  fetchApplianceCategorySuccess,
  fetchApplianceCategoryError,
  fetchUnitsSuccess,
  fetchUnitsError,
  fetchParametersSuccess,
  fetchParametersError,
} from 'store/actions/setting';
import { errorHandler } from 'store/helpers';
import api, { applianceCategoryRequest, parametersRequest, unitsRequest } from 'services/api';
import { settingsConstants } from 'store/actions/setting';

function* callFetchApplianceCategory(action) {
  try {
    const orgId = action.payload.params.orgId;
    const url = applianceCategoryRequest.APPLIANCE_CATEGORY.replace(':orgId', orgId);
    const { data } = yield call([api, 'get'], url, action.payload);
    yield put(fetchApplianceCategorySuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchApplianceCategoryError);
  }
}

function* callFetchUnits(action) {
  try {
    const orgId = action.payload.params.orgId;
    const url = unitsRequest.UNITS.replace(':orgId', orgId);
    const { data } = yield call([api, 'get'], url, action.payload);
    yield put(fetchUnitsSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchUnitsError);
  }
}

function* callFetchParameters(action) {
  try {
    const orgId = action.payload.params.orgId;
    const url = parametersRequest.PARAMETER.replace(':orgId', orgId);
    const { data } = yield call([api, 'get'], url, action.payload);
    yield put(fetchParametersSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchParametersError);
  }
}

export default function* settingsSaga() {
  yield takeLatest(settingsConstants.FETCH_UNITS_REQUEST, callFetchUnits);
  yield takeLatest(settingsConstants.FETCH_APPLIANCE_CATEGORY_REQUEST, callFetchApplianceCategory);
  yield takeLatest(settingsConstants.FETCH_PARAMETERS_REQUEST, callFetchParameters);
}
