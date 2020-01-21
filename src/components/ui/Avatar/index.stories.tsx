import React from 'react';
import { text } from '@storybook/addon-knobs';
import Avatar, { AvatarProps } from '.';

export default {
  component: Avatar,
  title: 'components/ui/Avatar',
};

const label = 'imgUrl';
const defaultValue =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80';

export const avatar = (): React.ReactElement<AvatarProps> => (
  <Avatar imgUrl={text(label, defaultValue)} altText="Samuel Edwards" />
);
