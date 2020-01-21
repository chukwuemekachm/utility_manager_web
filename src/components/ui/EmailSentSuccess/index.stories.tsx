import React from 'react';
import { text } from '@storybook/addon-knobs';
import EmailSentSuccess, { EmailSentSuccessProps } from '.';

export default {
  component: EmailSentSuccess,
  title: 'components/ui/EmailSentSuccess',
};

const label = 'message';
const defaultValue = `
  Hi there! Instructions to reset your password has been sent to your email. Please check it out to reset your password thanks!
`;

export const emailSentSuccess = (): React.ReactElement<EmailSentSuccessProps> => (
  <EmailSentSuccess message={text(label, defaultValue)} />
);
