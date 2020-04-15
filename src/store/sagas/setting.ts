/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, fork, call, put } from 'redux-saga/effects';

import {
  fetchApplianceCategorySuccess,
  fetchApplianceCategoryError,
  createApplianceCategorySuccess,
  createApplianceCategoryError,
  createParametersError,
  createParametersSuccess,
  closeModal,
  fetchUnitsSuccess,
  fetchUnitsError,
  fetchParametersSuccess,
  fetchParametersError,
  searchUnitsError,
  searchUnitsSuccess,
} from 'store/actions/setting';
import { errorHandler, successHandler } from 'store/helpers';
import api, { applianceCategoryRequest, parametersRequest, unitsRequest } from 'services/api';
import { settingsConstants } from 'store/actions/setting';
import { signUpSuccess } from '../actions/auth';

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

function* callCreateApplianceCategory(action) {
  try {
    const orgId = action.payload.params.orgId;
    const url = applianceCategoryRequest.APPLIANCE_CATEGORY.replace(':orgId', orgId);

    const response = yield call([api, 'post'], url, action.payload.data);
    yield fork(successHandler, response, createApplianceCategorySuccess);
    yield put(closeModal(true));
    yield put(closeModal(false));
  } catch (error) {
    yield fork(errorHandler, error, createApplianceCategoryError);
  }
}

function* callCreateParameter(action) {
  try {
    const orgId = action.payload.params.orgId;
    const url = parametersRequest.PARAMETER.replace(':orgId', orgId);

    const response = yield call([api, 'post'], url, action.payload.data);
    yield fork(successHandler, response, createParametersSuccess);
    yield put(closeModal(true));
    yield put(closeModal(false));
  } catch (error) {
    yield fork(errorHandler, error, createParametersError);
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

function* callSearchUnits(action) {
  try {
    const { orgId, searchValue } = action.payload.params;
    let url = unitsRequest.UNITS.replace(':orgId', orgId);
    url = `${url}?letter_symbol_search=searchValue&name_search=${searchValue}&sort_by=name`;
    const { data } = yield call([api, 'get'], url, action.payload);
    yield put(searchUnitsSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, searchUnitsError);
  }
}
export default function* settingsSaga() {
  yield takeLatest(settingsConstants.FETCH_UNITS_REQUEST, callFetchUnits);
  yield takeLatest(settingsConstants.FETCH_APPLIANCE_CATEGORY_REQUEST, callFetchApplianceCategory);
  yield takeLatest(settingsConstants.FETCH_PARAMETERS_REQUEST, callFetchParameters);
  yield takeLatest(settingsConstants.CREATE_APPLIANCE_CATEGORY_REQUEST, callCreateApplianceCategory);
  yield takeLatest(settingsConstants.CREATE_PARAMETERS_REQUEST, callCreateParameter);
  yield takeLatest(settingsConstants.SEARCH_UNITS_REQUEST, callSearchUnits);
}
