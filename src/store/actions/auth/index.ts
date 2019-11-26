import * as authConstants from './constants';

export const signUp = payload => ({
  type: authConstants.SIGN_UP_REQUEST,
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

export {
  authConstants, // Can't aggregate and use the values from the aggregated export at the same time
};
