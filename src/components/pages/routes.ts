import withSuspense from 'components/HOC/withSuspense';

export default [
  {
    path: '/',
    component: withSuspense({ page: 'Authentication' }),
    exact: true,
  },
  {
    path: '/reset-password/:reset_id',
    component: withSuspense({ page: 'ConfirmResetPassword' }),
    exact: true,
  },
  {
    path: '/success-feedback',
    component: withSuspense({ page: 'AuthenticationFeedback' }),
    exact: true,
  },
  {
    path: '/dashboard',
    component: withSuspense({ page: 'Dashboard' }),
    exact: false,
  },
];
