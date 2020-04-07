import React from 'react';
import SearchInput, { SearchInputItem } from '.';
import Icon from 'components/ui/Icon';

import { text } from '@storybook/addon-knobs';

export default {
  component: SearchInput,
  title: 'components/ui/SearchInput',
};

export const searchInput = (): React.ReactElement<{}> => (
  <SearchInput label={text('label', 'Unit Id')} placeholder={text('placeholder', 'I am a placeholder')}>
    {({ handleClick }) => (
      <>
        <SearchInputItem onClick={handleClick} value={1}>
          <Icon iconType="md-star" color="INFO" /> Music
        </SearchInputItem>
        <SearchInputItem onClick={handleClick} value={2}>
          Science & Technology
        </SearchInputItem>
        <SearchInputItem onClick={handleClick} value={3}>
          Film & Animation
        </SearchInputItem>
        <SearchInputItem onClick={handleClick} value={4}>
          Film
        </SearchInputItem>
      </>
    )}
  </SearchInput>
);
