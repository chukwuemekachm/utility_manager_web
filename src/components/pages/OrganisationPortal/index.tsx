import * as React from 'react';
import { Switch, Route, match, RouteProps } from 'react-router';
import { Location } from 'history';

import withSuspense from 'components/HOC/withSuspense';
import withOrgnisationPortalContainer from 'components/containers/OrgnisationPortalContainer';
import SEO from 'components/HOC/SEO';

interface OrgPortalProps {
  match: match<{}>;
  location: Location;
}
function getOrganisationRoutes(path: string): RouteProps[] {
  return [
    {
      path: `${path}/settings`,
      component: withSuspense({ page: 'OrganisationPortal/Settings' }),
      exact: true,
    },
    {
      path: `${path}/reports`,
      component: withSuspense({ page: 'OrganisationPortal/Reports' }),
      exact: true,
    },
    {
      path: `${path}/members`,
      component: withSuspense({ page: 'OrganisationPortal/Members' }),
      exact: true,
    },
  ];
}

function OrganisationPortal(props: OrgPortalProps): React.ReactElement {
  const {
    match: { path },
  } = props;

  return (
    <div>
      <SEO title="Portal" />
      {
        <Switch>
          {getOrganisationRoutes(path).map((route, index) => (
            <Route key={index} {...route} {...props} />
          ))}
        </Switch>
      }
    </div>
  );
}

export default withOrgnisationPortalContainer(OrganisationPortal);
