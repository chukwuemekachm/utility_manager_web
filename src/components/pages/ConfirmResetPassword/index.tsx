import * as React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import NewPasswordForm, { NewPasswordFormProps } from 'components/ui/NewPasswordForm';
import AuthenticationLayout from 'components/layouts/AuthenticationLayout';
import AuthenticationFormWrapper from 'components/ui/AuthenticationFormWrapper';
import AuthSuccessMessage, { imageTypes } from 'components/ui/AuthMessage';
import Link from 'components/ui/Link';
import { changeUserPassword } from 'store/actions/auth';
import LocationHelper from 'helpers/Location';

function ResetPasswordLayout(props: NewPasswordFormProps): React.ReactElement<NewPasswordFormProps> {
  const expiresAt = LocationHelper.getSearchValue('expiresAt');
  let linkHasExpired = true;
  if (expiresAt) {
    const dateObj = new Date(expiresAt);
    const dateIsInvalid = Number.isNaN(dateObj.getDay());
    linkHasExpired = dateIsInvalid || !dateObj || dateObj < new Date();
  }

  function renderChildView(): React.ReactElement<NewPasswordFormProps> {
    if (linkHasExpired) {
      return (
        <AuthSuccessMessage imageType={imageTypes.expiredLink}>
          <div>
            Oops, it seems the link has expired.  Please click the link below to resend the email.
            <ResetPasswordLayout.LinkWrapper>
              <Link href="/?display=2">Resend reset password link</Link>
            </ResetPasswordLayout.LinkWrapper>
          </div>
        </AuthSuccessMessage>
      );
    }

    return (
      <AuthenticationFormWrapper showHeader={false}>
        <NewPasswordForm {...props} />
      </AuthenticationFormWrapper>
    );
  }

  return <AuthenticationLayout showTerms={false}>{renderChildView()}</AuthenticationLayout>;
}

ResetPasswordLayout.LinkWrapper = styled.div`
  margin-top: 2%;
`;
const mapStateToProps = (state): Pick<NewPasswordFormProps, 'isLoading'> => ({
  isLoading: state.auth.status.isLoading,
});

const mapDispatchToProps = (dispatch): Pick<NewPasswordFormProps, 'changePassword'> => ({
  changePassword: payload => dispatch(changeUserPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticationContainer(ResetPasswordLayout));
