import * as dashboardConstants from './constants';

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

export const createOrganisation = (payload): Action => ({
  type: dashboardConstants.CREATE_ORGANISATION_REQUEST,
  payload,
});

export const createOrganisationSuccess = (payload): Action => ({
  type: dashboardConstants.CREATE_ORGANISATION_SUCCESS,
  payload,
});

export const createOrganisationError = (payload): Action => ({
  type: dashboardConstants.CREATE_ORGANISATION_ERROR,
  payload,
});

export {
  dashboardConstants, // Can't aggregate and use the values from the aggregated export at the same time
};
