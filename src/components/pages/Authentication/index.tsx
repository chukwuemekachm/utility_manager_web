import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import AuthenticationLayout from 'components/layouts/AuthenticationLayout';
import AuthenticationFormWrapper from 'components/ui/AuthenticationFormWrapper';
import { AuthenticationProps } from 'components/containers/AuthenticationContainer';
import Login from 'components/pages/Authentication/Login';
import SignUp from 'components/pages/Authentication/SignUp';
import ForgotPassword from 'components/pages/Authentication/ForgotPassword';
import LocationHelper from 'helpers/Location';
import { STORAGE_KEYS } from 'utils/constants';

export interface AuthenticationFormProps extends AuthenticationProps {
  isLoading: boolean;
}

const { useState } = React;

function Authentication({ isLoading }: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  const [display, setDisplay] = useState(() => {
    const value = +LocationHelper.getSearchValue('display') || 0;
    return value < 3 ? value : 0;
  });
  const isAuthenticated = localStorage.getItem(STORAGE_KEYS.IS_USER_AUTHENTICATED);

  if (String(isAuthenticated) === 'true') return <Redirect to="/dashboard" />;

  function handleTabChange(tabNumber: number): (event: React.SyntheticEvent) => void {
    return (event: React.SyntheticEvent): void => {
      event.preventDefault();
      setDisplay(tabNumber);
    };
  }

  return (
    <AuthenticationLayout showTerms={display == 1}>
      <AuthenticationFormWrapper display={display} handleTabChange={handleTabChange} showHeader={true}>
        {display == 2 ? (
          <ForgotPassword isLoading={isLoading} />
        ) : display == 1 ? (
          <SignUp isLoading={isLoading} />
        ) : (
          <Login isLoading={isLoading} forgotLinkClicked={handleTabChange(2)} />
        )}
      </AuthenticationFormWrapper>
    </AuthenticationLayout>
  );
}

const mapStateToProps = (state): Pick<AuthenticationFormProps, 'isLoading'> => {
  return {
    isLoading: state.auth.status.isLoading,
  };
};

export default connect(mapStateToProps)(Authentication);
