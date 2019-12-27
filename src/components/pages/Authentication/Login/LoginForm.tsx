import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import __spacing from 'settings/__spacing';
import { AuthenticationFormProps } from 'components/pages/Authentication';

import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import { login } from 'store/actions/auth';

export default function Login(props: AuthenticationFormProps) {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    values: { errors },
      isLoading,
  } = props;

  return (
    <Login.Wrapper onSubmit={handleSubmit('LOGIN')}>
      <Input
        name='usernameOrEmail'
        handleChange={handleChange}
        handleBlur={handleBlur}
        title='Username Or Email'
        value={values.usernameOrEmail}
        errorFeedback={errors.usernameOrEmail}
      />
      <Input
        name='password'
        handleChange={handleChange}
        handleBlur={handleBlur}
        title='Password'
        value={values.password}
        errorFeedback={errors.password}
        type='password'
      />
      <Button isLoading={isLoading}>Login</Button>
    </Login.Wrapper>
  );
}

Login.Wrapper = styled.form`
  width: 100%;
`;
