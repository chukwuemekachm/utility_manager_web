import * as logsConstants from './constants';

export const fetchLogsError = (payload): Action => ({
  type: logsConstants.FETCH_LOGS_ERROR,
  payload,
});

export const fetchLogs = (payload): Action => ({
  type: logsConstants.FETCH_LOGS_REQUEST,
  payload,
});

export const fetchLogsSuccess = (payload): Action => ({
  type: logsConstants.FETCH_LOGS_SUCCESS,
  payload,
});

export { logsConstants };
