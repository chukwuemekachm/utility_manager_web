/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import withAuthenticationContainer from 'components/containers/AuthenticationContainer';
import { AuthenticationFormProps } from 'components/pages/Authentication';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';
import Checkbox from 'components/ui/Checkbox';
import { signUp } from 'store/actions/auth';
import SEO from 'components/HOC/SEO';

interface SignUpDispatchProps {
  signUp: (payload: any) => void;
}

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  showPassword: false,
};

function SignUp(props: AuthenticationFormProps): React.ReactElement<AuthenticationFormProps> {
  const { handleSubmit, isLoading } = props;

  return (
    <>
      <SEO title="SignUp" />
      <Form
        handleSubmit={handleSubmit('SIGN_UP')}
        isLoading={isLoading}
        submitButtonLabel="Sign Up"
        validationSchemaKey="signUp"
        defaultValues={defaultValues}
      >
        {({ handleChange, handleBlur, values, errors }): React.ReactNode => (
          <SignUp.Wrapper>
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
              value={values.showPassword}
              errorFeedback={errors.confirmPassword}
              checked={values.showPassword}
            >
              Show Passwords
            </Checkbox>
          </SignUp.Wrapper>
        )}
      </Form>
    </>
  );
}

SignUp.Wrapper = styled.div`
  width: 100%;
`;

const mapDispatchToProps = (dispatch): SignUpDispatchProps => ({
  signUp: (payload): void => dispatch(signUp(payload)),
});

export default connect(null, mapDispatchToProps)(withAuthenticationContainer(SignUp));
