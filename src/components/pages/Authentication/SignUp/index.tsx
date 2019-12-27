/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';
import withAuthenticationContainer, { AuthenticationProps } from 'components/containers/AuthenticationContainer';
import { signUp } from 'store/actions/auth';

export interface SignUpProps extends AuthenticationProps {
  isLoading: boolean;
}

function SignUp(props: SignUpProps): React.ReactElement<SignUpProps> {
  return <SignUpForm {...props} />;
}

const mapDispatchToProps = (dispatch): { signUp: (payload: any) => void } => ({
  signUp: (payload): void => dispatch(signUp(payload)),
});

export default connect(null, mapDispatchToProps)(withAuthenticationContainer(SignUp));
