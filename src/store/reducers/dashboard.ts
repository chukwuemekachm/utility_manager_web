/* eslint-disable @typescript-eslint/no-explicit-any */
import { dashboardConstants } from 'store/actions/dashboard';
import { defaultFetchState, defaultCreateData } from 'utils/constants';
import { updateStateOnFetch, updateStateOnCreate } from 'helpers/reducerHelpers';

export interface DashboardState {
  userOrgs: FetchDataType;
  createOrganisation: CreateObjectType;
}
const initialState: DashboardState = {
  userOrgs: defaultFetchState,
  createOrganisation: defaultCreateData,
};

const defaultPayload = {
  nextPageRoute: '',
  data: [],
  organisations: [],
  message: '',
  meta: {},
};

export default function dashboardReducer(state = initialState, { type, payload = defaultPayload }): DashboardState {
  switch (type) {
    case dashboardConstants.FETCH_ORGANISATION_REQUEST:
    case dashboardConstants.FETCH_ORGANISATION_ERROR:
    case dashboardConstants.FETCH_ORGANISATION_SUCCESS:
      return updateStateOnFetch(type, 'userOrgs', state, payload);

    case dashboardConstants.CREATE_ORGANISATION_REQUEST:
    case dashboardConstants.CREATE_ORGANISATION_ERROR:
    case dashboardConstants.CREATE_ORGANISATION_SUCCESS:
      return updateStateOnCreate(type, 'createOrganisation', state, payload);

    default:
      return state;
  }
}
