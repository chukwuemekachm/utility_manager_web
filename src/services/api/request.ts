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
};

export default {
  auth: authRequest,
  dashboard: dashboardRequest,
};
