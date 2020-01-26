import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { AuthenticationFormWrapper, AuthenticationFormWrapperProps } from '.';

export default {
  component: AuthenticationFormWrapper,
  title: 'components/layouts/AuthenticationFormWrapper',
};

export const authenticationFormWrapper = (): React.ReactElement<AuthenticationFormWrapperProps> => (
  <AuthenticationFormWrapper display={number('display', 0)} showHeader={boolean('showHeader', false)}>
    {''}
  </AuthenticationFormWrapper>
);
