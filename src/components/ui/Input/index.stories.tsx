import React from 'react';
import Input, { InputType } from '.';
import { action } from '@storybook/addon-actions';
import { select, text, array } from '@storybook/addon-knobs';
export default {
  component: Input,
  title: 'components/ui/Input',
};

const typeOptions = {
  text: 'text',
  number: 'number',
  email: 'email',
  password: 'password',
};
export const input = () => {
  const currentValue = 'First Name';
  return (
    <Input
      type={select('type', typeOptions, 'text') as InputType}
      name={text('name', 'firstName')}
      title={text('title', 'First Name')}
      value={text('value', currentValue)}
      errorFeedback={array('errorFeedback', ['Missing Field', 'First name must be at least 5 characters'])}
      handleChange={action('Clicked')}
      handleBlur={action('Blur Handler!!')}
    />
  );
};
