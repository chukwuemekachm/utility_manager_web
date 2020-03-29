import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { AuthenticationFormWrapper, AuthenticationFormWrapperProps } from '.';

export default {
  component: AuthenticationFormWrapper,
  title: 'components/ui/AuthenticationFormWrapper',
};

export const authenticationFormWrapper = (): React.ReactElement<AuthenticationFormWrapperProps> => (
  <AuthenticationFormWrapper showHeader={boolean('showHeader', false)}>{''}</AuthenticationFormWrapper>
);
