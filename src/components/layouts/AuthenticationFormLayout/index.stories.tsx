import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { AuthenticationFormLayout } from '.';

export default {
  component: AuthenticationFormLayout,
  title: 'components/layouts/AuthenticationFormLayout',
};

export const authenticationFormLayout = () => (
  <AuthenticationFormLayout
    display={number('display', 0)}
    showHeader={boolean('showHeader', false)}
    showTerms={boolean('showTerms', true)}
  >
    {''}
  </AuthenticationFormLayout>
);
