import * as dashboardConstants from './constants';

export const retrieveProfile = (): Action => ({
  type: dashboardConstants.PROFILE_REQUEST,
});

export const retrieveProfileError = (payload): Action => ({
  type: dashboardConstants.PROFILE_ERROR,
  payload,
});

export const retrieveProfileSuccess = (payload): Action => ({
  type: dashboardConstants.PROFILE_SUCCESS,
  payload,
});

export {
  dashboardConstants, // Can't aggregate and use the values from the aggregated export at the same time
};
