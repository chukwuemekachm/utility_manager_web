import * as React from 'react';
import styled from '@emotion/styled';

import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import { AuthenticationFormProps } from 'components/pages/Authentication';
import Checkbox from '../../../ui/Checkbox';

function SignUpForm(props: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    values: { errors },
    isLoading,
  } = props;

  return (
    <SignUpForm.Wrapper onSubmit={handleSubmit('SIGN_UP')}>
      <Input
        name="firstName"
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="First Name"
        value={values.firstName}
        errorFeedback={errors.firstName}
      />
      <Input
        name="lastName"
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Last Name"
        value={values.lastName}
        errorFeedback={errors.lastName}
      />
      <Input
        name="email"
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Email"
        value={values.email}
        errorFeedback={errors.email}
      />
      <Input
        name="username"
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Username"
        value={values.username}
        errorFeedback={errors.username}
        autoComplete="username"
      />
      <Input
        name="password"
        type={values.showPassword ? 'text' : 'password'}
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Password"
        value={values.password}
        errorFeedback={errors.password}
        autoComplete="new-password"
      />
      <Input
        name="confirmPassword"
        type={values.showPassword ? 'text' : 'password'}
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Confirm Password"
        value={values.confirmPassword}
        errorFeedback={errors.confirmPassword}
        autoComplete="new-password"
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
        Sign Up
      </Button>
    </SignUpForm.Wrapper>
  );
}

SignUpForm.Wrapper = styled.form`
  width: 100%;
`;

export default SignUpForm;
