import React from 'react';
import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';

import MoreButton from '.';

export default {
  component: MoreButton,
  title: 'components/ui/MoreButton',
};
export function moreButton(): React.ReactElement<{}> {
  return <MoreButton handleClick={action('handleClick')} actionIndex={number('actionIndex', 1)}></MoreButton>;
}
