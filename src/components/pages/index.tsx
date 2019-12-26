import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageWrapper from '../HOC/PageWrapper'
function withSuspense(page: string, data?: Record<string, any>) {
  return function (props: Record<string, any>) {
    const LazyComponent = React.lazy(() => import(`components/pages/${page}`));

    // TODO: implement fallback loader/spinner for lazy loading
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PageWrapper>
           <LazyComponent {...props} {...data} />
        </PageWrapper>

      </React.Suspense>
    );
  }
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
];

export default function Pages() {
  return (
    <Switch>
      {pageRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
}
