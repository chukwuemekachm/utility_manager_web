import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from "@storybook/addon-knobs";
import Button, { ButtonType } from '.';

export default {
  component: Button,
  title: 'components/ui/Button',
};

const isLoadingLabel = 'isLoading';
const isLoadingDefaultValue = false;

const typeLabel = 'size';
const typeOptions = {
  submit: 'submit',
  button: 'button',
  reset: 'reset',
};
const sizeDefaultValue = 'button';

const childrenLabel = 'children';
const childrenDefaultValue = 'Default Button Component';

export const button = () => (
  <Button
    isLoading={boolean(isLoadingLabel, isLoadingDefaultValue)}
    type={select(typeLabel, typeOptions, sizeDefaultValue) as ButtonType}
    handleClick={action('clicked')}
  >
    {
      text(childrenLabel, childrenDefaultValue)
    }
  </Button>
);
