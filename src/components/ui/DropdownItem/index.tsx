import * as React from 'react';
import styled from '@emotion/styled';
import __spacing from 'settings/__spacing';
import { WHITE_SMOKE } from 'settings/__color';

export interface DropdownItemProps {
  children: React.ReactNode;
  value: string | number;
  onClick: (e, value: string | number, children: React.ReactNode) => void;
  active?: boolean;
  itemSelected?: boolean;
}

export default function DropdownItem(props: DropdownItemProps) {
  /**
   * This component should be re-used anywhere we need to create a dropdown
   * see examples in SelectInput and SearchInput stories
   */
  const { children, value, onClick } = props;

  return (
    <DropdownItem.Wrapper onClick={e => onClick(e, value, children)}>
      <input type="radio" className="radio" />
      <label> {children}</label>
    </DropdownItem.Wrapper>
  );
}

DropdownItem.Wrapper = styled.div`
  padding: ${__spacing.small};
  cursor: pointer;
  &:hover {
    background: ${WHITE_SMOKE};
  }

  input[type='radio'] {
    display: none;
  }
  label {
    cursor: pointer;
  }
`;
