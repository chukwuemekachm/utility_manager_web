/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';
import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import { AuthenticationFormProps } from 'components/pages/Authentication';
import { signUp } from 'store/actions/auth';

function SignUp(props: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  return <SignUpForm {...props} />;
}

const mapDispatchToProps = (dispatch): { signUp: (payload: any) => void } => ({
  signUp: (payload): void => dispatch(signUp(payload)),
});

export default connect(null, mapDispatchToProps)(withAuthenticationContainer(SignUp));
