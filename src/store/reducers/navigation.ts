import { navigationConstants } from 'store/actions/navigation';

const initialState = {
  data: {},
  status: {
    isRetrieved: false,
    isChanged: false,
    isPending: false,
  },
};

const defaultPayload = {
  nextPageRoute: '',
  data: {},
};

export default function navigationReducer(state = initialState, { type, payload = defaultPayload }) {
  switch (type) {
    case navigationConstants.NAVIGATION_RETRIEVE_REQUEST:
      return {
        ...state,
        status: {
          isRetrieved: false,
          isChanged: false,
          isPending: true,
        },
      };

    case navigationConstants.NAVIGATION_RETRIEVED:
      return {
        ...state,
        data: {
          ...state.data,
          ...payload.data,
        },
        status: {
          isRetrieved: true,
          isChanged: false,
          isPending: false,
        },
      };

    case navigationConstants.NAVIGATION_CHANGE:
      return {
        ...state,
        nextPageRoute: payload.nextPageRoute,
        data: {
          ...state.data,
          ...payload.data,
        },
        status: {
          isChanged: true,
          isPending: false,
          isRetrieved: false,
        },
      };

    default:
      return state;
  }
}
