import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import withSuspense from 'components/HOC/withSuspense';

const pageRoutes = [
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

export default function Pages(): React.ReactElement<{}> {
  return (
    <Switch>
      {pageRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      <Redirect to="/dashboard" />
    </Switch>
  );
}
