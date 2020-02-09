import * as React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import withAuthenticationContainer, { AuthenticationProps } from 'components/containers/AuthenticationContainer';
import AuthenticationLayout from 'components/layouts/AuthenticationLayout';
import AuthenticationFormWrapper from 'components/ui/AuthenticationFormWrapper';
import Input from 'components/ui/Input';
import Form from 'components/ui/Form';
import Checkbox from 'components/ui/Checkbox';
import AuthSuccessMessage, { imageTypes } from 'components/ui/AuthMessage';
import Link from 'components/ui/Link';
import { changeUserPassword } from 'store/actions/auth';
import LocationHelper from 'helpers/Location';
import SEO from 'components/HOC/SEO';
import { convertISOtoDateObj } from 'helpers/dateHelpers';

interface ConfirmResetPasswordProps extends AuthenticationProps {
  isLoading: boolean;
  changePassword: (payload: any) => void;
}

function ResetPasswordLayout({
  handleSubmit,
  isLoading,
}: ConfirmResetPasswordProps): React.ReactElement<ConfirmResetPasswordProps> {
  const expiresAt = LocationHelper.getSearchValue('expiresAt');
  let linkHasExpired = true;
  if (expiresAt) {
    const dateObj = convertISOtoDateObj(expiresAt);
    const dateIsInvalid = Number.isNaN(dateObj.getDay());
    linkHasExpired = dateIsInvalid || !dateObj || dateObj < new Date();
  }

  function renderChildView(): React.ReactNode {
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

    const defaultValues = {
      password: '',
      confirmPassword: '',
      showPassword: false,
    };

    return (
      <AuthenticationFormWrapper showHeader={false}>
        <Form
          handleSubmit={handleSubmit('NEW_PASSWORD')}
          isLoading={isLoading}
          submitButtonLabel="Update Password"
          validationSchemaKey="changeUserPassword"
          defaultValues={defaultValues}
        >
          {({ handleChange, handleBlur, values, errors }): React.ReactNode => (
            <>
              <Input
                name="password"
                type={values.showPassword ? 'text' : 'password'}
                handleChange={handleChange}
                handleBlur={handleBlur}
                title="Password"
                value={values.password}
                errorFeedback={errors.password}
              />
              <Input
                name="confirmPassword"
                type={values.showPassword ? 'text' : 'password'}
                handleChange={handleChange}
                handleBlur={handleBlur}
                title="Confirm Password"
                value={values.confirmPassword}
                errorFeedback={errors.confirmPassword}
              />

              <Checkbox
                name="showPassword"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value="checkShowPassword"
                errorFeedback={errors.confirmPassword}
                checked={values.showPassword}
              >
                Show Passwords
              </Checkbox>
            </>
          )}
        </Form>
      </AuthenticationFormWrapper>
    );
  }

  return (
    <>
      <SEO title={linkHasExpired ? 'Link Expired' : 'Reset Password'} />
      <AuthenticationLayout showTerms={false}>{renderChildView()}</AuthenticationLayout>
    </>
  );
}

ResetPasswordLayout.LinkWrapper = styled.div`
  margin-top: 2%;
`;

const mapStateToProps = (state): Pick<ConfirmResetPasswordProps, 'isLoading'> => ({
  isLoading: state.auth.status.isLoading,
});

const mapDispatchToProps = (dispatch): Pick<ConfirmResetPasswordProps, 'changePassword'> => ({
  changePassword: payload => dispatch(changeUserPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticationContainer(ResetPasswordLayout));
