import { authConstants } from 'store/actions/auth';

interface AuthState {
  status: {
    isAuthenticated: boolean;
    isLoading: boolean;
    hasError: boolean;
  };
  error: {
    message: string;
    errors: Array<any>;
  };
  data: Record<string, any>;
}
const initialState = {
  status: {
    isAuthenticated: false,
    isLoading: false,
    hasError: false
  },
  error: {
    message: '',
    errors: []
  },
  data: {},
  message: ''
};

export default function authReducer(
  state: AuthState = initialState,
  { type, payload }
) {
  switch (type) {
    case authConstants.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
        },
      };
    case authConstants.FORGOT_PASSWORD_SUCCESS:
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

    case authConstants.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: true,
        },
        message: payload.message,
      };
    case authConstants.SIGN_UP_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true
        }
      };

    case authConstants.SIGN_UP_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false
        },
        data: {
          ...state.data,
          ...payload.data
        },
        message: payload.message
      };
    case authConstants.SIGN_UP_ERROR:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: true
        },
        message: payload.message
      };
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true
        }
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        status: {
          isAuthenticated: true,
          isLoading: false,
          hasError: false
        },
        error: {
          message: '',
          errors: []
        },
        data: payload
      };
    case authConstants.LOGIN_ERROR:
      return {
        ...state,
        status: {
          isAuthenticated: false,
          isLoading: false,
          hasError: true
        },
        error: {
          message: payload.message,
          errors: state.error.errors.concat(payload.status)
        },
        data: {}
      };

    case authConstants.CHANGE_USER_PASSWORD_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true
        }
      };
    case authConstants.CHANGE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: false,
          data: payload,
          errors: {}
        }
      };
    case authConstants.CHANGE_USER_PASSWORD_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: true,
          errors: payload,
          data: {}
        }
      };
    default:
      return state;
  }
}
