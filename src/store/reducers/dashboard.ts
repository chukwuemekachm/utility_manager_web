/* eslint-disable @typescript-eslint/no-explicit-any */
import { dashboardConstants } from 'store/actions/dashboard';

const initialState = {
  retrieveProfile: {
    data: {},
    isPending: false,
    isComplete: false,
  },
  userOrganisation: {
    data: {},
    isPending: false,
    isComplete: false,
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
    case dashboardConstants.FETCH_PROFILE_ERROR:
      return {
        ...state,
        retrieveProfile: {
          isPending: false,
          isComplete: false,
          data: { ...payload.data },
        },
      };

    case dashboardConstants.FETCH_PROFILE_REQUEST:
      return {
        ...state,
        // status: {
        retrieveProfile: {
          ...state.retrieveProfile,
          isPending: true,
          isComplete: false,
        },
      };

    case dashboardConstants.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        retrieveProfile: {
          ...state.retrieveProfile,
          data: {
            ...payload.data,
          },
          isPending: true,
          isComplete: false,
        },
      };

    case dashboardConstants.ORGANISATION_REQUEST:
      return {
        ...state,
        userOrganisation: {
          ...state.userOrganisation,
          isComplete: false,
          isPending: true,
        },
      };

    case dashboardConstants.ORGANISATION_SUCCESS:
      return {
        ...state,
        userOrganisation: {
          data: payload.data,
          isComplete: true,
          isPending: false,
        },
      };

    default:
      return state;
  }
}
