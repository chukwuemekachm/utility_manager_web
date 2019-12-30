import * as React from 'react';
import NewPassword, { NewPasswordProps } from './NewPassword';

import AuthenticationForm from '../../layouts/AuthenticationFormLayout';
import { connect } from 'react-redux';
import { changeUserPassword } from '../../../store/actions/auth';
import withAuthenticationContainer from 'components/containers/AuthenticationContainer';

function ResetPasswordLayout(props: NewPasswordProps) {
  const args = location.search.split('?')[1];
  const splittedArgs = args.split('&');
  let expiresAt = splittedArgs.find(element => element.startsWith('expiresAt='));
  expiresAt = expiresAt.split('=')[1].replace('+', ' ');
  const dateObj = new Date(expiresAt);

  const linkHasExpired = dateObj < new Date();
  return (
    <AuthenticationForm showHeader={false} showTerms={false}>
      {linkHasExpired ? <div>Link Expired</div> : <NewPassword {...props} />}
    </AuthenticationForm>
  );
}

const mapStateToProps = state => ({
  isLoading: state.auth.status.isLoading,
});

const mapDispatchToProps = dispatch => ({
  changePassword: payload => dispatch(changeUserPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticationContainer(ResetPasswordLayout));
