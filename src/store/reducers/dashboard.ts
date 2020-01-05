import { dashboardConstants } from 'store/actions/dashboard';

const initialState = {
  data: {},
  status: {
    isRetrieved: false,
    isPending: false,
  },
};

const defaultPayload = {
  nextPageRoute: '',
  data: {},
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
          isRetrieved: true,
          isPending: false,
        },
      };

    default:
      return state;
  }
}
