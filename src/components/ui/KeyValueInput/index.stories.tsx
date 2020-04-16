import React from 'react';
import KeyValuePair from '.';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: KeyValuePair,
  title: 'components/ui/KeyValuePair',
};

export const keyValuePair = () => (
  <KeyValuePair title="Specs" required={boolean('required', false)} handleChange={action('Clicked')} value="" />
);
