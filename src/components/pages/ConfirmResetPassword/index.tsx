import * as React from 'react';
import NewPassword, { NewPasswordProps } from './NewPassword';
import AuthenticationLayout from '../../layouts/AuthenticationLayout';
import AuthForm from '../../layouts/AuthenticationFormLayout';
import AuthSuccessMessage, { imageTypes } from '../../ui/AuthMessage';
import Link from '../../ui/Link';
import { connect } from 'react-redux';
import { changeUserPassword } from '../../../store/actions/auth';
import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import styled from '@emotion/styled';
import LocationHelper from 'helpers/Location';

function ResetPasswordLayout(props: NewPasswordProps) {
  const expiresAt = LocationHelper.getSearchValue('expiresAt');
  let linkHasExpired = true;
  if (expiresAt) {
    const dateObj = new Date(expiresAt);
    const dateIsInvalid = Number.isNaN(dateObj.getDay());
    linkHasExpired = dateIsInvalid || !dateObj || dateObj < new Date();
  }

  if (linkHasExpired) {
    return (
      <AuthenticationLayout showTerms={false}>
        <AuthSuccessMessage imageType={imageTypes.expiredLink}>
          <div>
            Oops, it seems the link has expired.  Please click the link below to resend the email.
            <ResetPasswordLayout.LinkWrapper>
              <Link href="/?display=2">Resend reset password link</Link>
            </ResetPasswordLayout.LinkWrapper>
          </div>
        </AuthSuccessMessage>
      </AuthenticationLayout>
    );
  }

  return (
    <AuthForm showTerms={false} showHeader={false}>
      <NewPassword {...props} />
    </AuthForm>
  );
}

ResetPasswordLayout.LinkWrapper = styled.div`
  margin-top: 2%;
`;
const mapStateToProps = state => ({
  isLoading: state.auth.status.isLoading,
});

const mapDispatchToProps = dispatch => ({
  changePassword: payload => dispatch(changeUserPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticationContainer(ResetPasswordLayout));
