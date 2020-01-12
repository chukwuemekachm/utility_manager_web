import * as React from 'react';
import { connect } from 'react-redux';

import AuthenticationForm from 'components/layouts/AuthenticationFormLayout';

import Login from './Login';
import SignUp from './SignUp';
import { AuthenticationProps } from 'components/containers/AuthenticationContainer';
import ForgotPassword from './ForgotPassword';
import LocationHelper from 'helpers/Location';

export interface AuthenticationFormProps extends AuthenticationProps {
  isLoading: boolean;
}

const { useState } = React;

function Authentication({ isLoading }: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  const [display, setDisplay] = useState(() => {
    const value = +LocationHelper.getSearchValue('display') || 0;
    return value < 3 ? value : 0;
  });

  function handleTabChange(tabNumber) {
    return e => {
      e.preventDefault();
      setDisplay(tabNumber);
    };
  }
  return (
    <AuthenticationForm showTerms={display == 1} display={display} handleTabChange={handleTabChange} showHeader={true}>
      {display == 2 ? (
        <ForgotPassword isLoading={isLoading} />
      ) : display == 1 ? (
        <SignUp isLoading={isLoading} />
      ) : (
        <Login isLoading={isLoading} forgotLinkClicked={handleTabChange(2)} />
      )}
    </AuthenticationForm>
  );
}

const mapStateToProps = (state): Pick<AuthenticationFormProps, 'isLoading'> => {
  return {
    isLoading: state.auth.status.isLoading,
  };
};

export default connect(mapStateToProps)(Authentication);
