import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import Checkbox, { CheckboxProps } from '.';

export default {
  component: Checkbox,
  title: 'components/ui/Checkbox',
};

export const checkbox = (): React.ReactElement<CheckboxProps> => (
  <Checkbox
    handleChange={action('Changed!!')}
    handleBlur={action('Blurred!!')}
    value={text('value', 'showPassword')}
    checked={boolean('checked', false)}
    disabled={boolean('disabled', false)}
    name={text('name', 'showPassword')}
  >
    {text('children', 'Show Passwords')}
  </Checkbox>
);
