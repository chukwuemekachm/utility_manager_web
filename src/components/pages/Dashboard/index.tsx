import * as React from 'react';
import { retrieveProfile } from '../../../store/actions/dashboard';
import { connect } from 'react-redux';
import withAuthenticationContainer from '../../containers/AuthenticationContainer';

interface DashboardProps {
  profile: {
    firstName: string;
    lastName: string;
    username: string;
    verified: string;
  };
  retrieveProfile: () => void;
}
function Dashboard({ profile, retrieveProfile }: DashboardProps) {
  React.useEffect(() => {
    retrieveProfile();
  }, []);

  return (
    <ul>
      <li>{profile.firstName}</li>
      <li>{profile.lastName}</li>
      <li>{profile.username}</li>
      <li>{profile.verified}</li>
    </ul>
  );
}

const mapStateToProps = state => ({
  profile: state.dashboard.data,
});

const mapDispatchToProps = dispatch => ({
  retrieveProfile: payload => dispatch(retrieveProfile(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticationContainer(Dashboard));
