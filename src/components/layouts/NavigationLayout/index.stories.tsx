import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import NavigationLayout from '.';

export default {
  component: NavigationLayout,
  title: 'components/layouts/NavigationLayout',
};
const sampleImage =
  'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80';

export const navigationLayout = (): React.ReactElement => (
  <NavigationLayout currentDisplay={number('currentDisplay', 2)} imgUrl={text('imgUrl', sampleImage)}>
    {text('children', 'Here They are')}
  </NavigationLayout>
);
