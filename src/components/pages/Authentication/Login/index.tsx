/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import { AuthenticationFormProps } from 'components/pages/Authentication';
import {login} from 'store/actions/auth';

function Login(props: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  return <LoginForm {...props} />;
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  makeLoginRequest: payload => {
    const loginparams = {
      usernameOrEmail: payload.usernameOrEmail,
      password: payload.password
    };
    dispatch(login(loginparams));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticationContainer(Login));
