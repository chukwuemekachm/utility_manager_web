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
  fetchSingleApplianceCategorySuccess,
  fetchSingleApplianceCategoryError,
  createApplianceSuccess,
  createApplianceError,
  fetchAppliancesError,
  fetchAppliancesSuccess,
} from 'store/actions/setting';
import { errorHandler, successHandler } from 'store/helpers';
import api, { applianceCategoryRequest, parametersRequest, unitsRequest, applianceRequest } from 'services/api';
import { settingsConstants } from 'store/actions/setting';

function* callFetchSingleApplianceCategory(action) {
  try {
    const { orgId, categoryId } = action.payload.params;
    let categoryURL = applianceCategoryRequest.SINGLE.replace(':orgId', orgId);
    categoryURL = categoryURL.replace(':categoryId', categoryId);
    const { data } = yield call([api, 'get'], categoryURL);
    yield put(fetchSingleApplianceCategorySuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchSingleApplianceCategoryError);
  }
}

function* callFetchAppliances(action) {
  try {
    const {
      orgId,
      pageNumber = 1,
      searchValue = '',
      searchKeys = [],
      sortKeys = '+category_name',
    } = action.payload.params;
    let applianceURL = applianceRequest.APPLIANCE.replace(':orgId', orgId);
    // let filterStr = `page=${pageNumber}&category_id_search${categoryId}&label_search=${searchValue}&page_limit=20`;
    let filterStr = `page=${pageNumber}&page_limit=20&sort_keys=${sortKeys}`;
    for (const searchKey of searchKeys) {
      filterStr += `&${searchKey}_search=${searchValue}`;
    }
    applianceURL = `${applianceURL}?${filterStr}`;

    const { data } = yield call([api, 'get'], applianceURL);
    yield put(fetchAppliancesSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchAppliancesError);
  }
}

function* callFetchApplianceCategory(action) {
  try {
    const { orgId, pageNumber, searchValue } = action.payload.params;
    let url = applianceCategoryRequest.APPLIANCE_CATEGORY.replace(':orgId', orgId);
    url = `${url}?page=${pageNumber}&name_search=${searchValue}&page_limit=20`;
    const { data } = yield call([api, 'get'], url, action.payload);
    yield put(fetchApplianceCategorySuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchApplianceCategoryError);
  }
}

function* callCreateApplianceCategory(action) {
  try {
    const { orgId } = action.payload.params;
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

function* callCreateAppliance(action) {
  try {
    const { orgId, categoryId } = action.payload.params;
    let categoryURL = applianceCategoryRequest.SINGLE.replace(':orgId', orgId);
    categoryURL = categoryURL.replace(':categoryId', categoryId);
    const applianceURL = `${categoryURL}/appliances`;

    const response = yield call([api, 'post'], applianceURL, action.payload.data);
    yield fork(successHandler, response, createApplianceSuccess);
    yield put(closeModal(true));
    yield put(closeModal(false));
  } catch (error) {
    yield fork(errorHandler, error, createApplianceError);
  }
}

function* callFetchUnits(action) {
  try {
    const { orgId, pageNumber = 1, searchValue } = action.payload.params;
    let url = unitsRequest.UNITS.replace(':orgId', orgId);
    url = `${url}?page=${pageNumber}&name_search=${searchValue}&page_limit=20`;
    const { data } = yield call([api, 'get'], url);
    yield put(fetchUnitsSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchUnitsError);
  }
}

function* callFetchParameters(action) {
  try {
    const { orgId, pageNumber = 1, searchValue, searchKeys = ['name_search'], pageLimit = 20 } = action.payload.params;
    let url = parametersRequest.PARAMETER.replace(':orgId', orgId);
    url = `${url}?page=${pageNumber}&page_limit=${pageLimit}`;
    searchKeys.forEach(key => {
      url += `&${key}_search=${searchValue}`;
    });

    const { data } = yield call([api, 'get'], url);
    yield put(fetchParametersSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchParametersError);
  }
}

function* callSearchUnits(action) {
  try {
    const { orgId, searchValue } = action.payload.params;
    let url = unitsRequest.UNITS.replace(':orgId', orgId);
    url = `${url}?letter_symbol_search=searchValue&name_search=${searchValue}&page_limit=20&sort_by=name`;
    const { data } = yield call([api, 'get'], url, action.payload);
    yield put(searchUnitsSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, searchUnitsError);
  }
}

export default function* settingsSaga() {
  yield takeLatest(settingsConstants.FETCH_UNITS_REQUEST, callFetchUnits);
  yield takeLatest(settingsConstants.FETCH_SINGLE_APPLIANCE_CATEGORY_REQUEST, callFetchSingleApplianceCategory);
  yield takeLatest(settingsConstants.FETCH_APPLIANCE_CATEGORY_REQUEST, callFetchApplianceCategory);
  yield takeLatest(settingsConstants.FETCH_APPLIANCES_REQUEST, callFetchAppliances);
  yield takeLatest(settingsConstants.FETCH_PARAMETERS_REQUEST, callFetchParameters);
  yield takeLatest(settingsConstants.CREATE_APPLIANCE_CATEGORY_REQUEST, callCreateApplianceCategory);
  yield takeLatest(settingsConstants.CREATE_PARAMETERS_REQUEST, callCreateParameter);
  yield takeLatest(settingsConstants.SEARCH_UNITS_REQUEST, callSearchUnits);
  yield takeLatest(settingsConstants.CREATE_APPLIANCE_REQUEST, callCreateAppliance);
}
