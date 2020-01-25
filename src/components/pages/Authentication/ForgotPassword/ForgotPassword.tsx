import * as React from 'react';
import styled from '@emotion/styled';

import { AuthenticationFormProps } from 'components/pages/Authentication';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';

function ForgotPassword(props: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    values: { errors },
    isLoading,
  } = props;

  return (
    <ForgotPassword.Wrapper onSubmit={handleSubmit('FORGOT_PASSWORD')}>
      <Input
        name="email"
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Email"
        value={values.email}
        errorFeedback={errors.email}
      />
      <Button type="submit" isLoading={isLoading}>
        Forgot Password
      </Button>
    </ForgotPassword.Wrapper>
  );
}

ForgotPassword.Wrapper = styled.form`
  width: 100%;
`;

export default ForgotPassword;
