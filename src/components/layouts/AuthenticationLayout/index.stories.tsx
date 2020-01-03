import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import AuthenticationLayout from '.';

export default {
  component: AuthenticationLayout,
  title: 'components/layouts/AuthenticationLayout',
};
const label = 'showTerms';
const defaultValue = true;

export const authenticationLayout = () => (
  <AuthenticationLayout showTerms={boolean(label, defaultValue)}> </AuthenticationLayout>
);
