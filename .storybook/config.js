import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import theme from './theme';

addDecorator(withKnobs);
addParameters({
  options: {
    theme,
  }
});

configure(require.context('../src', true, /\.stories\.tsx?$/), module);
