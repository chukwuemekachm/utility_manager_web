import * as React from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';
import { AuthenticationFormProps } from 'components/pages/Authentication';

import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import Link from 'components/ui/Link';
import Checkbox from '../../../ui/Checkbox';

export interface LoginFormProps extends AuthenticationFormProps {
  forgotLinkClicked: React.EventHandler<React.SyntheticEvent>;
}
export default function Login(props: LoginFormProps) {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    forgotLinkClicked,
    values,
    values: { errors },
    isLoading,
  } = props;

  return (
    <Login.Wrapper onSubmit={handleSubmit('LOGIN')}>
      <Input
        name="usernameOrEmail"
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Username Or Email"
        value={values.usernameOrEmail}
        errorFeedback={errors.usernameOrEmail}
      />
      <Input
        name="password"
        type={values.showPassword ? 'text' : 'password'}
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Password"
        value={values.password}
        errorFeedback={errors.password}
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
      <Button isLoading={isLoading}>Login</Button>
      <div className="forgot-link">
        <Link href="#" handleClick={forgotLinkClicked}>
          Forgot Password
        </Link>
      </div>
    </Login.Wrapper>
  );
}

Login.Wrapper = styled.form`
  width: 100%;
  .forgot-link {
    text-align: right;
    margin-top: ${__spacing.medium};
  }
`;
