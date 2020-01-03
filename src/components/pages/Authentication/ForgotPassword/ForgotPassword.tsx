import * as React from 'react';
import styled from '@emotion/styled';

import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import __spacing from 'settings/__spacing';
import { fontSizes, fontWeights } from 'settings/__fonts';
import { BRAND_PRIMARY, BRAND_WHITE, BRAND_PRIMARY_HOVER } from 'settings/__color';
import { AuthenticationFormProps } from '../index';

function ForgotPassword(props: AuthenticationFormProps) {
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

export default ForgotPassword;