import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import { forgotPassword } from 'store/actions/auth';
import { AuthenticationFormProps } from 'components/pages/Authentication';
import Input from 'components/ui/Input';
import Form from 'components/ui/Form';
import SEO from 'components/HOC/SEO';

interface DispatchProps {
  forgotPassword: (payload: any) => void;
}

function ResetPassword(props: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  const { isLoading, handleSubmit } = props;

  return (
    <ResetPassword.Wrapper>
      <SEO title="Forgot Password" />
      <Form
        handleSubmit={handleSubmit('FORGOT_PASSWORD')}
        isLoading={isLoading}
        submitButtonLabel="Forgot Password"
        validationSchemaKey="forgotPassword"
        defaultValues={{ email: '' }}
      >
        {({ values, errors, handleChange, handleBlur }): React.ReactNode => (
          <Input
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            title="Email"
            value={values.email}
            errorFeedback={errors.email}
          />
        )}
      </Form>
    </ResetPassword.Wrapper>
  );
}

ResetPassword.Wrapper = styled.div`
  width: 100%;
`;

const mapDispatchToProps = (dispatch): DispatchProps => ({
  forgotPassword: (payload): void => dispatch(forgotPassword(payload)),
});

export default connect(null, mapDispatchToProps)(withAuthenticationContainer(ResetPassword));
