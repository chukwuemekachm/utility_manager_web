import * as React from 'react';
import styled from '@emotion/styled';
import __spacing from 'settings/__spacing';
import { WHITE_SMOKE } from 'settings/__color';

export interface DropdownItemProps {
  children: React.ReactNode;
  value?: string | number;
  onClick?: (e, value, children: React.ReactNode) => void;
  active?: boolean;
  autoFocus?: boolean;
  itemSelected?: boolean;
  returnNodeOnClick?: () => React.ReactNode;
}

export const DropdownItemContainer = styled.div<Pick<DropdownItemProps, 'active' | 'autoFocus'>>`
  position: absolute;
  top: 100%;
  width: 100%;
  transition: all 0.4s;
  overflow: hidden;
  background: #fff;
  color: black;
  z-index: 1;
  box-shadow: 11px 22px 28px -9px rgba(0, 0, 0, 0.31);
  display: none;

  &::-webkit-scrollbar {
    width: 4px;
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 8px;
  }

  ${props =>
    props.active &&
    `
    display: block;
    max-height: 240px;
    overflow-y: scroll;
  `}
`;

export default function DropdownItem(props: DropdownItemProps) {
  /**
   * This component should be re-used anywhere we need to create a dropdown
   * see examples in SelectInput and SearchInput stories
   */
  const { children, value, onClick, returnNodeOnClick } = props;

  let finalChildren = children;
  if (returnNodeOnClick) {
    finalChildren = returnNodeOnClick();
  }
  return (
    <DropdownItem.Wrapper onClick={e => onClick && onClick(e, value, finalChildren)}>
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
