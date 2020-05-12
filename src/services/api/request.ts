export const authRequest = {
  SIGN_UP: '/auth/register',
  CHANGE_PASSWORD: '/auth/reset/confirm',
  LOGIN: '/auth/login',
  FORGOT_PASSWORD: '/auth/reset',
  PROFILE: '/user/profile',
  CHANGE_LOGGED_IN_USER_PASSWORD: '/auth/password',
};

export const dashboardRequest = {
  ORGANISATION: '/user/orgs?sort_by=role.name',
  CREATE_ORGANISATION: '/org/create',
};

export const parametersRequest = {
  PARAMETER: '/org/:orgId/parameters',
  SINGLE_PARAMETER: '/org/:orgId/parameters/:parameterId',
};

export const unitsRequest = {
  UNITS: '/org/:orgId/units',
  SINGLE_UNIT: '/org/:orgId/units/:parameterId',
};

export const logsRequest = {
  LOGS: '/org/:orgId/logs',
};

export const applianceCategoryRequest = {
  APPLIANCE_CATEGORY: '/org/:orgId/appliance-category',
  SINGLE: '/org/:orgId/appliance-category/:categoryId',
};

export const applianceRequest = {
  APPLIANCE: '/org/:orgId/appliances',
  SINGLE: '/org/:orgId/appliances/:applianceId',
};

export default {
  auth: authRequest,
  dashboard: dashboardRequest,
  parameters: parametersRequest,
  applianceCategory: applianceCategoryRequest,
  units: unitsRequest,
  logs: logsRequest,
  appliance: applianceRequest,
};
