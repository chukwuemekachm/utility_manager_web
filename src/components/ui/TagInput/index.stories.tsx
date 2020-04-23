import React from 'react';
import { text } from '@storybook/addon-knobs';
import TagInput from '.';

export default {
  component: TagInput,
  title: 'components/ui/TagInput',
};
const array = ['Automobiles', 'Film & Animation', 'Science & Technology', 'Art'];

export const tagInput = () => <TagInput dropdown={array} />;
