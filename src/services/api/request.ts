export const authRequest = {
  SIGN_UP: '/auth/register',
  CHANGE_PASSWORD: '/auth/reset/confirm',
  LOGIN: '/auth/login',
  FORGOT_PASSWORD: '/auth/reset',
};

export const dashboardRequest = {
  PROFILE: '/user/profile',
};
export default {
  auth: authRequest,
  dashboard: dashboardRequest,
};
