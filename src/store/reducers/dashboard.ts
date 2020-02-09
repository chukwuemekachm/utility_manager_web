/* eslint-disable @typescript-eslint/no-explicit-any */
import { dashboardConstants } from 'store/actions/dashboard';

const initialState = {
  // data: {},
  // organisations: {},
  retrieveProfile: {
    data: {},
    isPending: false,
    isComplete: false,
  },
  retrieveOrganisation: {
    data: {},
    isPending: false,
    isComplete: false,
    // isOrganisationFetched: false,
    // isOrganisationPending: true,
  },
  updateProfileRequest: {
    data: {},
    isPending: false,
    isComplete: false,
  },
};

const defaultPayload = {
  nextPageRoute: '',
  data: {},
  organisation: {},
};

export default function navigationReducer(state = initialState, { type, payload = defaultPayload }): DashBoardState {
  switch (type) {
    case dashboardConstants.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        updateProfileRequest: {
          ...state.updateProfileRequest,
          data: {},
          isPending: true,
          isComplete: false,
        },
      };

    case dashboardConstants.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateProfileRequest: {
          isPending: true,
          isComplete: false,
          data: { ...payload.data },
        },
      };

    case dashboardConstants.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        updateProfileRequest: {
          isPending: false,
          isComplete: false,
          data: { ...payload.data },
        },
      };

    case dashboardConstants.PROFILE_REQUEST:
      return {
        ...state,
        // status: {
        retrieveProfile: {
          ...state.retrieveProfile,
          isPending: true,
          isComplete: false,
        },
      };

    case dashboardConstants.PROFILE_SUCCESS:
      return {
        ...state,
        retrieveProfile: {
          data: {
            ...state.retrieveProfile,
            ...payload.data,
          },
          isPending: true,
          isComplete: false,
        },
        // data: {
        //   ...state.data,
        //   ...payload.data,
        // },
        // status: {
        //   isFetched: true,
        //   isPending: false,
        // },
      };

    case dashboardConstants.ORGANISATION_REQUEST:
      return {
        ...state,
        retrieveOrganisation: {
          ...state.retrieveOrganisation,
          isComplete: false,
          isPending: true,
        },
      };

    case dashboardConstants.ORGANISATION_SUCCESS:
      return {
        ...state,
        retrieveOrganisation: {
          data: {
            ...payload,
          },
          isComplete: false,
          isPending: true,
        },
      };

    default:
      return state;
  }
}
