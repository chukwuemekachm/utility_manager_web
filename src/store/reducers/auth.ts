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
  data: {}
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
    default:
      return state;
  }
}
