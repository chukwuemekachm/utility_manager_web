import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import Input from 'components/ui/Input';
import withAuthenticationContainer, { AuthenticationProps } from 'components/containers/AuthenticationContainer';
import __spacing from 'settings/__spacing';
import { fontSizes, fontWeights } from 'settings/__fonts';
import { BRAND_PRIMARY, BRAND_WHITE, BRAND_PRIMARY_HOVER } from 'settings/__color';
import { changeUserPassword } from 'store/actions/auth';


function NewPassword(props: AuthenticationProps) {
  const { handleChange, handleSubmit, handleBlur, values, values: { errors } } = props;

  return (
    <NewPassword.Wrapper onSubmit={handleSubmit('NEW_PASSWORD')}>
      <Input
        name="password"
        type="password"
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Password"
        value={values.password}
        errorFeedback={errors.password}
      />
      <Input
        name="confirmPassword"
        type="password"
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Confirm Password"
        value={values.confirmPassword}
        errorFeedback={errors.confirmPassword}
      />
      <button type="submit">Confirm New Password</button>
    </NewPassword.Wrapper>
  );
}

NewPassword.Wrapper = styled.form`
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
  changePassword: payload => dispatch(changeUserPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticationContainer(NewPassword));
