/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { connect } from 'react-redux';

import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import { AuthenticationFormProps } from 'components/pages/Authentication';
import SignUpForm from 'components/ui/SignUpForm';
import { signUp } from 'store/actions/auth';

interface SignUpDispatchProps {
  signUp: (payload: any) => void;
}

function SignUp(props: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  return <SignUpForm {...props} />;
}

const mapDispatchToProps = (dispatch): SignUpDispatchProps => ({
  signUp: (payload): void => dispatch(signUp(payload)),
});

export default connect(null, mapDispatchToProps)(withAuthenticationContainer(SignUp));
