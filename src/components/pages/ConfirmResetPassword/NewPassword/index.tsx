/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import withAuthenticationContainer, { AuthenticationProps } from 'components/containers/AuthenticationContainer';
import __spacing from 'settings/__spacing';
import { fontSizes, fontWeights } from 'settings/__fonts';
import { BRAND_PRIMARY, BRAND_WHITE, BRAND_PRIMARY_HOVER } from 'settings/__color';
import { changeUserPassword } from 'store/actions/auth';

interface NewPasswordProps extends AuthenticationProps {
  isLoading: boolean;
  changePassword: (payload: any) => void;
}

function NewPassword(props: NewPasswordProps): React.ReactElement<NewPasswordProps> {
  const {
    isLoading,
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    values: { errors },
  } = props;

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
      <Button type="submit" isLoading={isLoading}>
        Confirm New Password
      </Button>
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

const mapStateToProps = (state): Pick<NewPasswordProps, 'isLoading'> => ({
  isLoading: state.auth.status.isLoading,
});

const mapDispatchToProps = (dispatch): Pick<NewPasswordProps, 'changePassword'> => ({
  changePassword: (payload): void => dispatch(changeUserPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticationContainer(NewPassword));
