import React from 'react';
import SearchInput from '.';
import Icon from 'components/ui/Icon';

import { text } from '@storybook/addon-knobs';
import DropdownItem, { DropdownGroup } from 'components/ui/DropdownItem';
import { action } from '@storybook/addon-actions';

export default {
  component: SearchInput,
  title: 'components/ui/SearchInput',
};

export const searchInput = (): React.ReactElement<{}> => (
  <SearchInput
    value=""
    handleTextInputChange={action('handleChange!!')}
    handleChange={action('handleChange!!')}
    name="unitId"
    title={text('title', 'Unit Id')}
    placeholder={text('placeholder', 'I am a placeholder')}
  >
    {({ handleClick }) => (
      <>
        <DropdownItem onClick={handleClick} value={1}>
          <Icon iconType="md-star" color="INFO" /> Music
        </DropdownItem>
        <DropdownItem onClick={handleClick} value={2}>
          Science & Technology
        </DropdownItem>
        <DropdownItem onClick={handleClick} value={3}>
          Film & Animation
        </DropdownItem>
        <DropdownItem onClick={handleClick} value={4}>
          Film
        </DropdownItem>
      </>
    )}
  </SearchInput>
);

export const searchInputWithGroupedDropdown = (): React.ReactElement<{}> => (
  <SearchInput
    value=""
    handleTextInputChange={action('handleChange!!')}
    handleChange={action('handleChange!!')}
    name="unitId"
    title={text('title', 'Unit Id')}
    placeholder={text('placeholder', 'I am a placeholder')}
  >
    {({ handleClick }) => (
      <>
        <DropdownGroup label="Options with icons" />
        <DropdownItem onClick={handleClick} value={1}>
          <Icon iconType="md-star" color="INFO" /> Music
        </DropdownItem>

        <DropdownGroup label="Plain text options" />
        <DropdownItem onClick={handleClick} value={2}>
          Science & Technology
        </DropdownItem>

        <DropdownItem onClick={handleClick} value={3}>
          Film & Animation
        </DropdownItem>
        <DropdownItem onClick={handleClick} value={4}>
          Film
        </DropdownItem>
      </>
    )}
  </SearchInput>
);
