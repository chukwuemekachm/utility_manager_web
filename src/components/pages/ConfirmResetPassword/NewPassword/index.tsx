/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import Checkbox from 'components/ui/Checkbox';
import { AuthenticationProps } from 'components/containers/AuthenticationContainer';

export interface NewPasswordProps extends AuthenticationProps {
  isLoading: boolean;
  changePassword: (payload: any) => void;
}

function NewPassword(props: NewPasswordProps): React.ReactElement<NewPasswordProps> {
  const {
    isLoading,
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    values: { errors },
  } = props;

  return (
    <NewPassword.Wrapper onSubmit={handleSubmit('NEW_PASSWORD')}>
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
      <Button type="submit" isLoading={isLoading}>
        Update Password
      </Button>
    </NewPassword.Wrapper>
  );
}

NewPassword.Wrapper = styled.form`
  width: 100%;
`;

export default NewPassword;
