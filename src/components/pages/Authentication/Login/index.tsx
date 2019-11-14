import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import {
  BRAND_PRIMARY,
  BRAND_WHITE,
  BRAND_PRIMARY_HOVER
} from 'settings/__color';
import __spacing from 'settings/__spacing';
import { fontSizes, fontWeights } from 'settings/__fonts';

import withAuthenticationContainer, {
  AuthenticationProps
} from 'components/containers/AuthenticationContainer';
import Input from 'components/ui/Input';
import { login } from 'store/actions/auth';

function Login(props: AuthenticationProps) {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    values: { errors }
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
      <button type='submit'>Login</button>
    </Login.Wrapper>
  );
}

Login.Wrapper = styled.form`
  width: 100%;
  padding-top: ${__spacing.xLarge};
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  makeLoginRequest: payload => {
    const loginparams = {
      usernameOrEmail: payload.usernameOrEmail,
      password: payload.password
    };
    dispatch(login(loginparams));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticationContainer(Login));
