import * as React from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';
import withAuthenticationContainer, { AuthenticationProps } from 'components/containers/AuthenticationContainer';
import __spacing from 'settings/__spacing';
import { signUp } from 'store/actions/auth';

function SignUp(props: AuthenticationProps) {
 
   return (<SignUpForm {...props} />);
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  signUp: payload => dispatch(signUp(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticationContainer(SignUp));
