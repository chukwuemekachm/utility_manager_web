/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, fork, call, put } from 'redux-saga/effects';

import { fetchLogsError, fetchLogsSuccess } from 'store/actions/logs';
import { errorHandler } from 'store/helpers';
import api, { logsRequest } from 'services/api';
import { logsConstants } from 'store/actions/logs';

function* callFetchLogs(action) {
  try {
    const { orgId, pageNumber = 1, searchValue = '' } = action.payload.params;
    let logsURL = logsRequest.LOGS.replace(':orgId', orgId);
    logsURL = `${logsURL}?page=${pageNumber}&appliance_id_search=${searchValue}&page_limit=20`;

    const { data } = yield call([api, 'get'], logsURL);

    yield put(fetchLogsSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, fetchLogsError);
  }
}

export default function* settingsSaga() {
  yield takeLatest(logsConstants.FETCH_LOGS_REQUEST, callFetchLogs);
}
