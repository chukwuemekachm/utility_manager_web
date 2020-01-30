import * as dashboardConstants from './constants';

export const fetchProfile = (): Action => ({
  type: dashboardConstants.PROFILE_REQUEST,
});

export const fetchProfileError = (payload): Action => ({
  type: dashboardConstants.PROFILE_ERROR,
  payload,
});

export const fetchProfileSuccess = (payload): Action => ({
  type: dashboardConstants.PROFILE_SUCCESS,
  payload,
});

export const fetchCurrentUserOrganisations = (): Action => ({
  type: dashboardConstants.ORGANISATION_REQUEST,
});

export const fetchCurrentUserOrganisationsError = (payload): Action => ({
  type: dashboardConstants.ORGANISATION_ERROR,
  payload,
});

export const fetchCurrentUserOrganisationsSuccess = (payload): Action => ({
  type: dashboardConstants.ORGANISATION_SUCCESS,
  payload,
});

export {
  dashboardConstants, // Can't aggregate and use the values from the aggregated export at the same time
};
