import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import TagInput from '.';
import DropdownItem from '../DropdownItem';
import { action } from '@storybook/addon-actions';

export default {
  component: TagInput,
  title: 'components/ui/TagInput',
};

export const tagInput = () => (
  <TagInput
    name="parameters"
    title={text('title', 'Parameters')}
    autoComplete="off"
    handleBlur={action('Blur...')}
    handleChange={action('Change...')}
    handleSearchValue={action('searching')}
    required={boolean('required', false)}
  >
    {({ handleClick }) => (
      <>
        <DropdownItem onClick={handleClick}>Automobiles</DropdownItem>
        <DropdownItem onClick={handleClick}>Film & Animation</DropdownItem>
        <DropdownItem onClick={handleClick}>Science & Technology</DropdownItem>
      </>
    )}
  </TagInput>
);
