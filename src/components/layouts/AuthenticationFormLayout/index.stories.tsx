import React, { SyntheticEvent } from 'react';
import { AuthenticationFormLayout } from '.';
import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
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
