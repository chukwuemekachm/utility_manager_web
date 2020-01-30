import * as authConstants from './constants';

export const signUp = payload => ({
  type: authConstants.SIGN_UP_REQUEST,
  payload,
});

export const login = payload => ({
  type: authConstants.LOGIN_REQUEST,
  payload,
});

export const loginError = payload => ({
  type: authConstants.LOGIN_ERROR,
  payload,
});

export const loginSuccess = payload => ({
  type: authConstants.LOGIN_SUCCESS,
  payload,
});

export const logout = payload => ({
  type: authConstants.LOGOUT_REQUEST,
  payload,
});

export const logoutError = payload => ({
  type: authConstants.LOGIN_ERROR,
  payload,
});

export const logoutSuccess = payload => ({
  type: authConstants.LOGOUT_SUCCESS,
  payload,
});

export const signUpSuccess = payload => ({
  type: authConstants.SIGN_UP_SUCCESS,
  payload,
});

export const signUpError = payload => ({
  type: authConstants.SIGN_UP_ERROR,
  payload,
});

export const changeUserPassword = payload => ({
  type: authConstants.CHANGE_USER_PASSWORD_REQUEST,
  payload,
});

export const changeUserPasswordFailure = payload => ({
  type: authConstants.CHANGE_USER_PASSWORD_FAILURE,
  payload,
});

export const changeUserPasswordSuccess = payload => ({
  type: authConstants.CHANGE_USER_PASSWORD_SUCCESS,
  payload,
});

export const forgotPassword = payload => {
  return {
    type: authConstants.FORGOT_PASSWORD_REQUEST,
    payload,
  };
};

export const forgotPasswordSuccess = payload => ({
  type: authConstants.FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forgotPasswordError = payload => ({
  type: authConstants.FORGOT_PASSWORD_ERROR,
  payload,
});

export {
  authConstants, // Can't aggregate and use the values from the aggregated export at the same time
};
