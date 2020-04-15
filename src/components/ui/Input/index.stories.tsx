import React from 'react';
import Input, { InputType, InputProps } from '.';
import { action } from '@storybook/addon-actions';
import { select, text, array, boolean } from '@storybook/addon-knobs';

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

export const input = (): React.ReactElement<InputProps> => {
  const currentValue = 'First Name';
  return (
    <Input
      required={boolean('required', true)}
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

export const InputWithIcon = (): React.ReactElement<InputProps> => {
  const currentValue = 'First Name';
  return (
    <Input
      iconLabel={text('iconLabel', 'md-search')}
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
