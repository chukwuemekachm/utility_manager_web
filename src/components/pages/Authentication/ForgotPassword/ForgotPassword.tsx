import * as React from 'react';
import styled from '@emotion/styled';

import { AuthenticationFormProps } from 'components/pages/Authentication';
import Input from 'components/ui/Input';
import Form from 'components/ui/Form';

function ForgotPassword(props: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  const { isLoading, handleSubmit } = props;

  return (
    <ForgotPassword.Wrapper>
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
    </ForgotPassword.Wrapper>
  );
}

ForgotPassword.Wrapper = styled.div`
  width: 100%;
`;

export default ForgotPassword;
