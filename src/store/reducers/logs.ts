/* eslint-disable @typescript-eslint/no-explicit-any */
import { logsConstants } from 'store/actions/logs';
import { defaultFetchState, defaultMeta } from 'utils/constants';
import { updateStateOnFetch, updateStateOnCreate } from 'helpers/reducerHelpers';

interface LogsState {
  logs: FetchDataType;
}

const initialState: LogsState = {
  logs: defaultFetchState,
};

const defaultPayload = {
  data: [],
  meta: defaultMeta,
};

export default function settingsReducer(state = initialState, { type, payload = defaultPayload }) {
  switch (type) {
    case logsConstants.FETCH_LOGS_REQUEST:
    case logsConstants.FETCH_LOGS_ERROR:
    case logsConstants.FETCH_LOGS_SUCCESS:
      return updateStateOnFetch(type, 'logs', state, payload);
    default:
      return state;
  }
}
