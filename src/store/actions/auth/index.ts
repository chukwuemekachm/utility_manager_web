import * as authConstants from './constants';

export const signUp = (payload): Action => ({
  type: authConstants.SIGN_UP_REQUEST,
  payload,
});

export const login = (payload): Action => ({
  type: authConstants.LOGIN_REQUEST,
  payload,
});

export const loginError = (payload): Action => ({
  type: authConstants.LOGIN_ERROR,
  payload,
});

export const loginSuccess = (payload): Action => ({
  type: authConstants.LOGIN_SUCCESS,
  payload,
});

export const logout = (payload = { showNotification: false }): Action => ({
  type: authConstants.LOGOUT_REQUEST,
  payload,
});

export const logoutError = (payload): Action => ({
  type: authConstants.LOGIN_ERROR,
  payload,
});

export const logoutSuccess = (payload): Action => ({
  type: authConstants.LOGOUT_SUCCESS,
  payload,
});

export const signUpSuccess = (payload): Action => ({
  type: authConstants.SIGN_UP_SUCCESS,
  payload,
});

export const signUpError = (payload): Action => ({
  type: authConstants.SIGN_UP_ERROR,
  payload,
});

export const changeUserPassword = (payload): Action => ({
  type: authConstants.CHANGE_USER_PASSWORD_REQUEST,
  payload,
});

export const changeUserPasswordFailure = (payload): Action => ({
  type: authConstants.CHANGE_USER_PASSWORD_FAILURE,
  payload,
});

export const changeUserPasswordSuccess = (payload): Action => ({
  type: authConstants.CHANGE_USER_PASSWORD_SUCCESS,
  payload,
});

export const changeLoggedInUserPassword = (payload): Action => ({
  type: authConstants.CHANGE_LOGGED_IN_USER_PASSWORD_REQUEST,
  payload,
});

export const changeLoggedInUserPasswordFailure = (payload): Action => ({
  type: authConstants.CHANGE_LOGGED_IN_USER_PASSWORD_FAILURE,
  payload,
});

export const changeLoggedInUserPasswordSuccess = (payload): Action => ({
  type: authConstants.CHANGE_LOGGED_IN_USER_PASSWORD_SUCCESS,
  payload,
});

export const forgotPassword = (payload): Action => {
  return {
    type: authConstants.FORGOT_PASSWORD_REQUEST,
    payload,
  };
};

export const forgotPasswordSuccess = (payload): Action => ({
  type: authConstants.FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forgotPasswordError = (payload): Action => ({
  type: authConstants.FORGOT_PASSWORD_ERROR,
  payload,
});

export const fetchProfile = (): Action => ({
  type: authConstants.FETCH_USER_PROFILE_REQUEST,
});

export const fetchProfileError = (payload): Action => ({
  type: authConstants.FETCH_USER_PROFILE_ERROR,
  payload,
});

export const fetchProfileSuccess = (payload): Action => ({
  type: authConstants.FETCH_USER_PROFILE_SUCCESS,
  payload,
});

export const updateProfile = (payload): Action => ({
  type: authConstants.UPDATE_PROFILE_REQUEST,
  payload,
});

export const updateProfileError = (payload): Action => ({
  type: authConstants.UPDATE_PROFILE_ERROR,
  payload,
});

export const updateProfileSuccess = (payload): Action => ({
  type: authConstants.UPDATE_PROFILE_SUCCESS,
  payload,
});

export {
  authConstants, // Can't aggregate and use the values from the aggregated export at the same time
};
