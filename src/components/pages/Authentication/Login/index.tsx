/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { connect } from 'react-redux';

import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import LoginForm, { LoginFormProps } from 'components/ui/LoginForm';
import { login } from 'store/actions/auth';

interface LoginDispatchProps {
  makeLoginRequest: (payload: any) => void;
}

function Login(props: LoginFormProps): React.ReactElement<LoginFormProps> {
  return <LoginForm {...props} />;
}

const mapDispatchToProps = (dispatch): LoginDispatchProps => ({
  makeLoginRequest: (payload): void => dispatch(login(payload)),
});

export default connect(null, mapDispatchToProps)(withAuthenticationContainer(Login));
