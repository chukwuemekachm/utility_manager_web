import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import CheckBox, { CheckBoxProps } from '.';

export default {
  component: CheckBox,
  title: 'components/ui/CheckBox',
};

export const checkbox = (): React.ReactElement<CheckBoxProps> => (
  <CheckBox
    handleChange={action('Changed!!')}
    handleBlur={action('Blurred!!')}
    value={text('value', 'showPassword')}
    checked={boolean('checked', false)}
    disabled={boolean('disabled', false)}
    name={text('name', 'showPassword')}
  >
    {text('children', 'Show Passwords')}
  </CheckBox>
);
