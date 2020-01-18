import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import Icon, { Color, IconProps, Size } from '.';

export default {
  component: Icon,
  title: 'components/ui/Icon',
};

const colorLabel = 'color';
const colorOptions = {
  WHITE: 'WHITE',
  GREY: 'GREY',
};
const colorDefaultValue = 'GREY';

const sizeLabel = 'size';
const sizeOptions = {
  NORMAL: 'NORMAL',
  LARGE: 'LARGE',
};
const sizeDefaultValue = 'NORMAL';

const iconTypeLabel = 'iconType';
const iconTypeDefaultValue = 'md-construct';

export const icon = (): React.ReactElement<IconProps> => {
  return (
    <Icon
      iconType={text(iconTypeLabel, iconTypeDefaultValue)}
      color={select(colorLabel, colorOptions, colorDefaultValue) as Color}
      size={select(sizeLabel, sizeOptions, sizeDefaultValue) as Size}
    />
  );
};
