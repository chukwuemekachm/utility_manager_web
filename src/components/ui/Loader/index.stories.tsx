import React from 'react';
import { select } from '@storybook/addon-knobs';
import Loader, { LoaderSize, LoaderProps } from '.';

export default {
  component: Loader,
  title: 'components/ui/Loader',
};

const label = 'Size';
const options = {
  small: 'small',
  large: 'large',
};
const defaultValue = 'small';

export const loader = (): React.ReactElement<LoaderProps> => (
  <Loader size={select(label, options, defaultValue) as LoaderSize} />
);
