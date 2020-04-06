/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';
import { fontSizes } from 'settings/__fonts';

import { GAINS_BORO, WHITE_SMOKE } from 'settings/__color';
interface DropdownItemProps {
  children: React.ReactNode;
  value: string | number;
  onClick: (value: string | number, children: React.ReactNode) => void;
  active?: boolean;
  itemSelected?: boolean;
}

export function DropdownItem(props: DropdownItemProps) {
  const { children, value, onClick } = props;

  return (
    <DropdownItem.Wrapper onClick={() => onClick(value, children)}>
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

interface ChildrenProps {
  handleClick: (value: string | number, text: React.ReactNode) => void;
}

interface DropdownProps {
  children: (props: ChildrenProps) => React.ReactNode;
}

export default function Dropdown({ children }: DropdownProps) {
  const [active, setActive] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);
  const [currentValue, setCurrentValue] = useState(<div>Select Video Category</div>);

  const handleClick = (value: string | number, node: any): void => {
    setCurrentValue(node);
    setActive(false);
    setItemSelected(true);
  };

  function composeProps(): ChildrenProps {
    return {
      handleClick,
    };
  }

  return (
    <Dropdown.Wrapper>
      <Dropdown.SelectBox itemSelected={itemSelected}>
        <Dropdown.OptionContainer active={active}>{children(composeProps())}</Dropdown.OptionContainer>

        <Dropdown.Selected
          active={active}
          onClick={() => {
            setActive(!active);
          }}
        >
          {currentValue}
        </Dropdown.Selected>
      </Dropdown.SelectBox>
    </Dropdown.Wrapper>
  );
}

Dropdown.SelectBox = styled.div<Pick<DropdownItemProps, 'itemSelected'>>`
  font-size: ${fontSizes.small};
  display: flex;
  width: 100%;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.4);
  position: relative;
  ${props =>
    props.itemSelected &&
    `
   color: black;
  `}
`;

Dropdown.OptionContainer = styled.div<Pick<DropdownItemProps, 'active'>>`
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
Dropdown.Selected = styled.div<Pick<DropdownItemProps, 'active'>>`
  border: 1px solid ${GAINS_BORO};
  border-radius: 3px;
  position: relative;
  order: 0;
  padding: ${__spacing.small};
  cursor: pointer;
  &::after {
    content: '\f3d0';
    font-family: 'Ionicons';
    font-size: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    height: 100%;
    right: 10px;
    top: 5px;

    transition: all 0.4s;
    ${props =>
      props.active &&
      `
   transform: rotateX(180deg);
    top: -6px;
  `}
  }
`;
Dropdown.Wrapper = styled.div`
  margin-bottom: ${__spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;
