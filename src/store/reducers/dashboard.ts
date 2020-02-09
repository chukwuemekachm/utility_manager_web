/* eslint-disable @typescript-eslint/no-explicit-any */
import { dashboardConstants } from 'store/actions/dashboard';

const initialState = {
  data: {},
  organisations: {},
  status: {
    isOrganisationFetched: false,
    isOrganisationPending: true,
  },
};

const defaultPayload = {
  nextPageRoute: '',
  data: {},
  organisation: {},
};

export default function navigationReducer(state = initialState, { type, payload = defaultPayload }): DashBoardState {
  switch (type) {
    case dashboardConstants.ORGANISATION_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isOrganisationFetched: false,
          isOrganisationPending: true,
        },
      };

    case dashboardConstants.ORGANISATION_SUCCESS:
      return {
        ...state,
        organisations: {
          ...payload,
        },
        status: {
          isOrganisationFetched: true,
          isOrganisationPending: false,
        },
      };

    default:
      return state;
  }
}
