import React from 'react';
import { boolean } from "@storybook/addon-knobs";
import Logo from '.';

export default {
  component: Logo,
  title: 'components/layouts/Logo',
};

const label = 'hasText';
const defaultValue = true;

export const logo = () => (
  <Logo
    hasText={boolean(label, defaultValue)}
  />
);
