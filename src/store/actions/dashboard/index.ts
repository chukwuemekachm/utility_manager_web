import * as dashboardConstants from './constants';

export const retrieveProfile = payload => ({
  type: dashboardConstants.PROFILE_REQUEST,
  payload,
});

export const retrieveProfileError = payload => ({
  type: dashboardConstants.PROFILE_ERROR,
  payload,
});

export const retrieveProfileSuccess = payload => ({
  type: dashboardConstants.PROFILE_SUCCESS,
  payload,
});

export {
  dashboardConstants, // Can't aggregate and use the values from the aggregated export at the same time
};
