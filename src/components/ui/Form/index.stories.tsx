import React from 'react';
import Form, { FormProps } from '.';
import Input from '../Input';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: Form,
  title: 'components/ui/Form',
};
export const form = (): React.ReactElement<FormProps> => (
  <Form
    handleSubmit={action('submit triggered')}
    handleInputBlur={action('blur triggered')}
    submitButtonLabel={text('submitButtonLabel', 'submit')}
  >
    {(): React.ReactNode => (
      <Input
        title={text('title', 'Username')}
        autoComplete={text('autoComplete', 'on')}
        name={text('name', 'username')}
        value={text('title', 'emeka')}
        handleChange={action('change triggered')}
      />
    )}
  </Form>
);
