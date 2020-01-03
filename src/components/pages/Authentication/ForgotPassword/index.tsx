import * as React from 'react';
import { connect } from 'react-redux';

import ForgotPasswordForm from './ForgotPassword';
import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import { forgotPassword } from 'store/actions/auth';
import { AuthenticationFormProps } from '../index';

function ResetPassword(props: AuthenticationFormProps) {
  return <ForgotPasswordForm {...props} />;
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  forgotPassword: payload => dispatch(forgotPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticationContainer(ResetPassword));
