/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import { AuthenticationFormProps } from 'components/pages/Authentication';
import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';
import Link from 'components/ui/Link';
import Checkbox from 'components/ui/Checkbox';
import { login } from 'store/actions/auth';
import __spacing from 'settings/__spacing';
import SEO from 'components/HOC/SEO';

export interface LoginProps extends AuthenticationFormProps {
  forgotLinkClicked: React.EventHandler<React.SyntheticEvent>;
}

interface LoginDispatchProps {
  makeLoginRequest: (payload: any) => void;
}

const defaultValues = {
  usernameOrEmail: '',
  password: '',
  showPassword: false,
};

function Login(props: LoginProps): React.ReactElement<LoginProps> {
  const { handleSubmit, forgotLinkClicked, isLoading } = props;

  return (
    <>
      <SEO title="Login" />
      <Form
        handleSubmit={handleSubmit('LOGIN')}
        isLoading={isLoading}
        submitButtonLabel="Login"
        validationSchemaKey="validateLoginValues"
        defaultValues={defaultValues}
      >
        {({ handleChange, handleBlur, values, errors }): React.ReactNode => (
          <Login.Wrapper>
            <Input
              name="usernameOrEmail"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Username Or Email"
              value={values.usernameOrEmail}
              errorFeedback={errors.usernameOrEmail}
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
              autoComplete="current-password"
            />
            <Checkbox
              name="showPassword"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.showPassword}
              errorFeedback={errors.confirmPassword}
              checked={values.showPassword}
            >
              Show Passwords
            </Checkbox>
            <div className="forgot-link">
              <Link href="#" handleClick={forgotLinkClicked}>
                Forgot Password
              </Link>
            </div>
          </Login.Wrapper>
        )}
      </Form>
    </>
  );
}

Login.Wrapper = styled.div`
  width: 100%;

  .forgot-link {
    text-align: right;
    margin: ${__spacing.medium} 0;
  }
`;

const mapDispatchToProps = (dispatch): LoginDispatchProps => ({
  makeLoginRequest: (payload): void => dispatch(login(payload)),
});

export default connect(null, mapDispatchToProps)(withAuthenticationContainer(Login));
