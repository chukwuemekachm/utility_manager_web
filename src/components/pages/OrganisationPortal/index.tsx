import * as React from 'react';
import { Switch, Route, match, RouteProps } from 'react-router';
import { Location } from 'history';

import withSuspense from 'components/HOC/withSuspense';
import withOrganisationPortalContainer from 'components/containers/OrganisationPortalContainer';
import SEO from 'components/HOC/SEO';
import OrgPortalLayout from 'components/layouts/NavigationLayout';
import { connect } from 'react-redux';
import { moveToNextPage } from 'store/actions/navigation';

export interface OrgPortalProps {
  match: match<{
    orgId: string;
  }>;
  location: Location;
  moveToNextPage: Function;
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
    {
      path: `${path}/charts`,
      component: withSuspense({ page: 'OrganisationPortal/Charts' }),
      exact: true,
    },
    {
      path: `${path}/logs`,
      component: withSuspense({ page: 'OrganisationPortal/Logs' }),
      exact: true,
    },
  ];
}

function OrganisationPortal(props: OrgPortalProps): React.ReactElement {
  const {
    match: {
      path,
      params: { orgId },
    },
    location: { pathname },
    moveToNextPage,
  } = props;
  const sampleImage =
    'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80';
  let currentDisplay = 'charts';
  const slicedPathname = pathname.split('/').slice(-2);
  if (slicedPathname[1]) {
    currentDisplay = slicedPathname[1];
  } else if (slicedPathname[0]) {
    currentDisplay = slicedPathname[0];
  }

  function changePageHandler(routeName: string) {
    if (currentDisplay == routeName) return;
    moveToNextPage({ nextPageRoute: `/organisation/${orgId}/${routeName}` });
  }
  return (
    <div>
      <SEO title="Portal" />
      {
        <Switch>
          <OrgPortalLayout changePageHandler={changePageHandler} imgUrl={sampleImage} currentDisplay={currentDisplay}>
            {getOrganisationRoutes(path).map((route, index) => (
              <Route key={index} {...route} {...props} />
            ))}
          </OrgPortalLayout>
        </Switch>
      }
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  moveToNextPage: (payload): void => dispatch(moveToNextPage(payload)),
});

export default connect(null, mapDispatchToProps)(withOrganisationPortalContainer(OrganisationPortal));
