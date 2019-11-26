import { authConstants } from 'store/actions/auth';

const initialState = {
  status: {
    isAuthenticated: false,
    isLoading: false,
    hasError: false,
  },
  error: {
    message: '',
    errors: [],
  },
  data: {},
  message: '',
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case authConstants.SIGN_UP_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
        },
      };
    case authConstants.SIGN_UP_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
        },
        data: {
          ...state.data,
          ...payload.data,
        },
        message: payload.message,
      };
    case authConstants.SIGN_UP_ERROR:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: true,
        },
        message: payload.message,
      };
    default:
      return state;
  }
}
