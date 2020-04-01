/* eslint-disable @typescript-eslint/no-explicit-any */
import { navigationConstants } from 'store/actions/navigation';
import { Debugger } from 'inspector';

const initialState = {
  data: {},
  nextPageRoute: '',
  status: {
    isRetrieved: false,
    isChanged: false,
    isPending: false,
  },
  navigation: {
    showNavigationMenu: false,
    hideNavigationMenu: false,
  },
};

const defaultPayload = {
  nextPageRoute: '',
  data: {},
};

export default function navigationReducer(state = initialState, { type, payload = defaultPayload }): NavigationState {
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
      const payloadData = payload.data || {};
      return {
        ...state,
        nextPageRoute: payload.nextPageRoute,
        data: {
          ...state.data,
          ...payloadData,
        },
        status: {
          isChanged: true,
          isPending: false,
          isRetrieved: false,
        },
      };

    case navigationConstants.SHOW_NAVIGATION_MENU:
      return {
        ...state,
        navigation: {
          showNavigationMenu: true,
          hideNavigationMenu: false,
        },
      };

    case navigationConstants.HIDE_NAVIGATION_MENU:
      return {
        ...state,
        navigation: {
          showNavigationMenu: false,
          hideNavigationMenu: true,
        },
      };

    default:
      return state;
  }
}
