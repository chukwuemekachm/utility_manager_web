import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import AuthMessage, { imageTypes } from '.';

export default {
  component: AuthMessage,
  title: 'components/ui/AuthMessage',
};

const label = 'children';
const defaultValue = `
  Hi there! Instructions to reset your password has been sent to your email. Please check it out to reset your password thanks!
`;

export const authMessage = () => (
  <AuthMessage imageType={select('imageType', imageTypes, imageTypes.email) as imageTypes}>
    {text(label, defaultValue)}
  </AuthMessage>
);
