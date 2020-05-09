import React from 'react';
import { text } from '@storybook/addon-knobs';
import DragAndDrop from '.';
import { action } from '@storybook/addon-actions';

export default {
  component: DragAndDrop,
  title: 'components/ui/DragAndDrop',
};

export const dragAndDrop = () => {
  const defaultDisplayObjs = [
    { children: 'Item One', value: '1' },
    { children: 'Item Two', value: '2' },
    { children: 'Item Three', value: '3' },
    { children: 'Item Four', value: '4' },
    { children: 'Item Five', value: '5' },
    { children: 'Item Six', value: '6' },
    { children: 'Item Seven', value: '7' },
  ];

  return <DragAndDrop maxHeight="100%" onChange={action('Change!!')} defaultDisplayObjs={defaultDisplayObjs} />;
};
