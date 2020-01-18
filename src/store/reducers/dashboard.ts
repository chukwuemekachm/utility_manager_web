import { dashboardConstants } from 'store/actions/dashboard';

const initialState = {
  data: {},
  status: {
    isRetrieved: false,
    isPending: false,
  },
  organisation: {},
  fetchOrganisationStatus: {
    isOrganisationRetrieved: false,
    isOrganisationPending: true,
  },
};

const defaultPayload = {
  nextPageRoute: '',
  data: {},
  organisation: {},
};

export default function navigationReducer(state = initialState, { type, payload = defaultPayload }) {
  switch (type) {
    case dashboardConstants.PROFILE_REQUEST:
      return {
        ...state,
        status: {
          isRetrieved: false,
          isPending: true,
        },
      };

    case dashboardConstants.PROFILE_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...payload.data,
        },
        status: {
          isFetched: true,
          isPending: false,
        },
      };

    case dashboardConstants.ORGANISATION_REQUEST:
      return {
        ...state,
        status: {
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
        fetchOrganisationStatus: {
          isOrganisationFetched: true,
          isOrganisationPending: false,
        },
      };

    default:
      return state;
  }
}
