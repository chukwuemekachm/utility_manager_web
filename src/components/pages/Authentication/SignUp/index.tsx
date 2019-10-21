import * as React from 'react';
import styled from '@emotion/styled';

import Input from 'components/ui/Input';
import withAuthenticationContainer from 'components/HOCs/AuthenticationContainer';
import __spacing from 'settings/__spacing';
import { fontSizes, fontWeights } from 'settings/__fonts';
import { BRAND_PRIMARY, BRAND_WHITE, BRAND_PRIMARY_HOVER } from 'settings/__color';

function SignUp(props) {
  const { handleChange, handleSubmit, handleBlur, values, values: { errors } } = props;

  return (
    <SignUp.Wrapper onSubmit={handleSubmit}>
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
    </SignUp.Wrapper>
  );
}

SignUp.Wrapper = styled.form`
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

export default withAuthenticationContainer(SignUp);
