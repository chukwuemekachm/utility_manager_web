import * as React from 'react';
import { Switch, Route, match, RouteProps } from 'react-router';
import { Location } from 'history';

import withSuspense from 'components/HOC/withSuspense';
import withOrgnisationPortalContainer from 'components/containers/OrgnisationPortalContainer';
import SEO from 'components/HOC/SEO';
import NavigationLayout from '../../layouts/NavigationLayout';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/auth';
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
  console.log(props);
  const sampleImage =
    'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80';
  let currentDisplay = 0;

  let title = 'Reports';
  if (pathname.endsWith('charts')) {
    currentDisplay = 1;
    title = 'Charts';
  } else if (pathname.endsWith('settings')) {
    currentDisplay = 2;
    title = 'Settings';
  } else if (pathname.endsWith('members')) {
    currentDisplay = 3;
    title = 'Members';
  }

  function changePageHandler(pageNumber: number) {
    console.log('Got Here', pageNumber);
    if (currentDisplay == pageNumber) return;
    let routeName = 'reports';
    if (pageNumber == 1) {
      routeName = 'charts';
    } else if (pageNumber == 2) {
      routeName = 'settings';
    } else if (pageNumber == 3) {
      routeName = 'members';
    }
    moveToNextPage({ nextPageRoute: `/organisation/${orgId}/${routeName}` });
  }
  return (
    <div>
      <SEO title="Portal" />
      {
        <Switch>
          <NavigationLayout
            changePageHandler={changePageHandler}
            title={title}
            imgUrl={sampleImage}
            currentDisplay={currentDisplay}
          >
            {getOrganisationRoutes(path).map((route, index) => (
              <Route key={index} {...route} {...props} />
            ))}
          </NavigationLayout>
        </Switch>
      }
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  moveToNextPage: (payload): void => dispatch(moveToNextPage(payload)),
});

export default connect(null, mapDispatchToProps)(withOrgnisationPortalContainer(OrganisationPortal));
