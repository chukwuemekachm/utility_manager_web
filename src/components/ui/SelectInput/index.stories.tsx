import React from 'react';
import SelectInput from '.';
import DropdownItem from 'components/ui/DropdownItem';

import Icon from 'components/ui/Icon';
import { text } from '@storybook/addon-knobs';

export default {
  component: SelectInput,
  title: 'components/ui/SelectInput',
};

export const searchInput = (): React.ReactElement<{}> => (
  <SelectInput
    placeholder={text('placeholder', 'Select from me')}
    value={''}
    title={text('title', 'Label')}
    handleChange={() => true}
    tabIndex={1}
    name="name"
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
  </SelectInput>
);
