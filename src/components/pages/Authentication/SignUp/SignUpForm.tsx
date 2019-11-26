import * as React from 'react';
import styled from '@emotion/styled';

import Input from 'components/ui/Input';
import { AuthenticationProps } from 'components/containers/AuthenticationContainer';
import __spacing from 'settings/__spacing';
import { fontSizes, fontWeights } from 'settings/__fonts';
import { BRAND_PRIMARY, BRAND_WHITE, BRAND_PRIMARY_HOVER } from 'settings/__color';

function SignUpForm(props: AuthenticationProps) {
  const { handleChange, handleSubmit, handleBlur, values, values: { errors } } = props;

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
      />
      <Input
        name="password"
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Password"
        value={values.password}
        errorFeedback={errors.password}
      />
      <Input
        name="confirmPassword"
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Confirm Password"
        value={values.confirmPassword}
        errorFeedback={errors.confirmPassword}
      />
      <button type="submit">Sign Up</button>
    </SignUpForm.Wrapper>
  );
}

SignUpForm.Wrapper = styled.form`
  width: 100%;

  button {
    width: 100%;
    padding: ${__spacing.normal};
    font-size: ${fontSizes.small};
    font-weight: ${fontWeights.bold};
    border: none;
    background: ${BRAND_PRIMARY};
    color: ${BRAND_WHITE};
    border-radius: 3px;
    box-shadow: rgba(153, 153, 153, 0.1) 0px 0.32em 2em;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
      background: ${BRAND_PRIMARY_HOVER};
    }
  }
`;

export default SignUpForm;
