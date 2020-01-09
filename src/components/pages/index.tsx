/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageWrapper from 'components/HOC/PageWrapper';
import SuspenseLoader from '../ui/SuspenseLoader';

function withSuspense(page: string, data?: Record<string, any>): React.FC<null> {
  return function(props: Record<string, any>): React.ReactElement<Record<string, any>> {
    const LazyComponent = React.lazy(() => import(`components/pages/${page}`));

    // TODO: implement fallback loader/spinner for lazy loading
    return (
      <React.Suspense fallback={<SuspenseLoader />}>
        <PageWrapper>
          <LazyComponent {...props} {...data} />
        </PageWrapper>
      </React.Suspense>
    );
  };
}

const pageRoutes = [
  {
    path: '/',
    component: withSuspense('Authentication'),
    exact: true,
  },
  {
    path: '/reset-password/:reset_id',
    component: withSuspense('ConfirmResetPassword'),
    exact: true,
  },
  {
    path: '/success-feedback',
    component: withSuspense('AuthenticationFeedback'),
    exact: true,
  },
  {
    path: '/dashboard',
    component: withSuspense('Dashboard'),
    exact: true,
  },
];

export default function Pages(): React.ReactElement<{}> {
  return (
    <Switch>
      {pageRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
}
