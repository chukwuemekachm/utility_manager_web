import React from 'react';
import { text } from '@storybook/addon-knobs';
import DashBoardTitle, { DashBoardTitleProps } from '.';

export default {
  component: DashBoardTitle,
  title: 'components/ui/DashBoardTitle',
};

const childrenLabel = 'children';
const childrenDefaultValue = 'My Organizations';

export const dashBoardTitle = (): React.ReactElement<DashBoardTitleProps> => {
  return <DashBoardTitle>{text(childrenLabel, childrenDefaultValue)}</DashBoardTitle>;
};
