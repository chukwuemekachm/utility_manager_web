/* eslint-disable @typescript-eslint/no-explicit-any */
import { dashboardConstants } from 'store/actions/dashboard';

const initialState = {
  organisations: [],
  meta: {},
  status: {
    hasError: false,
    isOrganisationFetched: false,
    isOrganisationPending: true,
    isOrganisationCreated: false,
    isOrganisationCreating: false,
  },
  message: '',
};

const defaultPayload = {
  nextPageRoute: '',
  data: [],
  organisations: [],
  message: '',
  meta: {},
};

export default function dashboardReducer(state = initialState, { type, payload = defaultPayload }): DashBoardState {
  switch (type) {
    case dashboardConstants.ORGANISATION_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isOrganisationPending: true,
          hasError: false,
        },
      };

    case dashboardConstants.ORGANISATION_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isOrganisationPending: false,
          isOrganisationFetched: true,
          hasError: false,
        },
        organisations: payload.data,
        meta: { ...state.meta, ...payload.meta },
      };

    case dashboardConstants.ORGANISATION_ERROR:
      return {
        ...state,
        status: {
          ...state.status,
          isOrganisationPending: false,
          hasError: true,
        },
        message: payload.message,
      };
    case dashboardConstants.CREATE_ORGANISATION_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          hasError: false,
          isOrganisationCreated: false,
          isOrganisationCreating: true,
        },
      };

    case dashboardConstants.CREATE_ORGANISATION_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          hasError: false,
          isOrganisationCreated: true,
          isOrganisationCreating: false,
        },
      };
    case dashboardConstants.CREATE_ORGANISATION_ERROR:
      return {
        ...state,
        status: {
          ...state.status,
          hasError: true,
          isOrganisationCreated: false,
          isOrganisationCreating: false,
        },
      };

    default:
      return state;
  }
}
