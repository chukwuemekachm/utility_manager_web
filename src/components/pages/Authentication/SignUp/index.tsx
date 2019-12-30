/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';
import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import { AuthenticationFormProps } from 'components/pages/Authentication';
import __spacing from 'settings/__spacing';
import { signUp } from 'store/actions/auth';

function SignUp(props: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  return <SignUpForm {...props} />;
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  signUp: payload => {
    console.log(payload);
    dispatch(signUp(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticationContainer(SignUp));
