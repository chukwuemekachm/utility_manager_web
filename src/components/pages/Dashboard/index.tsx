import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, match, RouteProps } from 'react-router';
import { Location } from 'history';

import withSuspense from 'components/HOC/withSuspense';
import withDashboardContainer from 'components/containers/DashBoardContainer';
import { fetchProfile } from 'store/actions/auth';
import { showNavigationMenu } from 'store/actions/navigation';

import { logout } from 'store/actions/auth/';
import DashBoardLayout from 'components/layouts/DashBoardLayout';
import SEO from 'components/HOC/SEO';

interface DashboardProps {
  profile: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    verified: string;
    imageURL: string;
  };
  status: Partial<{
    isProfileFetched: boolean;
  }>;
  fetchProfile: () => void;
  match: match<{}>;
  location: Location;
  hideNavMenu: () => void;
  callLogout: () => string;
  handleClick?: () => void;
}

function getDashBoardRoutes(path: string): RouteProps[] {
  return [
    {
      path: `${path}`,
      component: withSuspense({ page: 'Dashboard/MyOrganisations' }),
      exact: true,
    },
    {
      path: `${path}/profile`,
      component: withSuspense({ page: 'Dashboard/UpdateProfile' }),
      exact: true,
    },
    {
      path: `${path}/organisation`,
      component: withSuspense({ page: 'Dashboard/CreateOrganisation' }),
      exact: true,
    },
    {
      path: `${path}/password`,
      component: withSuspense({ page: 'Dashboard/UpdatePassword' }),
      exact: true,
    },
  ];
}

function getPageTitle(pathname: string): string {
  switch (pathname) {
    case '/dashboard/profile':
    case '/dashboard/profile/':
      return 'Update Profile';
    case '/dashboard/organisation':
    case '/dashboard/organisation/':
      return 'Create New Organisation';
    case '/dashboard/password':
    case '/dashboard/password/':
      return 'Update Password';
    default:
      return 'My Organisations';
  }
}

function Dashboard(props: DashboardProps): React.ReactElement<DashboardProps> {
  const {
    fetchProfile,
    profile,
    match: { path },
    location: { pathname },
    hideNavMenu,
    callLogout,
    handleClick,
    status,
  } = props;

  React.useEffect(function(): void {
    if (!status.isProfileFetched) {
      fetchProfile();
    }
  }, []);

  const pageTitle = getPageTitle(pathname);

  return (
    <DashBoardLayout
      pageTitle={pageTitle}
      {...profile}
      hideNavMenu={hideNavMenu}
      callLogout={callLogout}
      handleClick={handleClick}
    >
      <SEO title={profile.firstName || 'Dashboard'} />
      {
        <Switch>
          {getDashBoardRoutes(path).map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      }
    </DashBoardLayout>
  );
}

const mapStateToProps = (state): Pick<DashboardProps, 'profile' | 'status'> => ({
  profile: state.auth.profile,
  status: state.auth.status,
});

const mapDispatchToProps = (dispatch): Pick<DashboardProps, 'fetchProfile' | 'callLogout' | 'handleClick'> => ({
  fetchProfile: (): void => dispatch(fetchProfile()),
  callLogout: (): string => dispatch(logout({ showNotification: true })),
  handleClick: (): void => dispatch(showNavigationMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withDashboardContainer(Dashboard));
