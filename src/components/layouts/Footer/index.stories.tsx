import React from 'react';
import { text } from "@storybook/addon-knobs";
import Footer from '.';

export default {
  component: Footer,
  title: 'components/layouts/Footer',
};

const label = 'title';
const defaultValue = 'Sign Up';

export const footer = () => (
  <Footer
    title={text(label, defaultValue)}
  />
);
