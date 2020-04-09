import React from 'react';
import Dropdown, { DropdownItem } from '.';
import Icon from 'components/ui/Icon';
import { text } from '@storybook/addon-knobs';

export default {
  component: Dropdown,
  title: 'components/ui/Dropdown',
};

export const dropdown = (): React.ReactElement<{}> => (
  <Dropdown placeholder={text('placeholder', 'Select from me')}>
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
  </Dropdown>
);
