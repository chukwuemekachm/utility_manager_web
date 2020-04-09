/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';
import { fontSizes } from 'settings/__fonts';

import { GAINS_BORO, WHITE_SMOKE, GRAY } from 'settings/__color';
interface SearchInputItemProps {
  children: React.ReactNode;
  value: string | number;
  onClick: (value: string | number, children: React.ReactNode) => void;
  active?: boolean;
  itemSelected?: boolean;
}

export function SearchInputItem(props: SearchInputItemProps) {
  const { children, value, onClick } = props;

  return (
    <SearchInputItem.Wrapper onClick={() => onClick(value, children)}>
      <input type="radio" className="radio" />
      <label> {children}</label>
    </SearchInputItem.Wrapper>
  );
}

SearchInputItem.Wrapper = styled.div`
  padding: ${__spacing.small};
  cursor: pointer;
  label {
    color: black;
    font-size: ${__spacing.normal};
  }
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

interface SearchInputProps {
  children: (props: ChildrenProps) => React.ReactNode;
  label?: string;
  placeholder?: string;
}

export default function SearchInput({ children, label = '', placeholder = '' }: SearchInputProps) {
  const [active, setActive] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const handleClick = (value: string | number, node: any): void => {
    setCurrentValue(node);
    setActive(false);
    setItemSelected(true);
  };
  const handleChange = e => {
    console.log(e.target.value);
    setCurrentValue(e.target.value);
    if (e.target.value.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  function composeProps(): ChildrenProps {
    return {
      handleClick,
    };
  }

  return (
    <SearchInput.Wrapper>
      <label>{label}</label>
      <SearchInput.SelectBox itemSelected={itemSelected}>
        <SearchInput.OptionContainer active={active}>{children(composeProps())}</SearchInput.OptionContainer>
        <SearchInput.SearchBox>
          <input type="text" onChange={handleChange} value={currentValue} placeholder={placeholder} />
        </SearchInput.SearchBox>
      </SearchInput.SelectBox>
    </SearchInput.Wrapper>
  );
}

SearchInput.SearchBox = styled.div`
  border: 1px solid ${GAINS_BORO};
  border-radius: 3px;
  margin: ${__spacing.xSmall} 0;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    font-size: ${fontSizes.normal};
    padding: ${__spacing.small};
    border: none;
    outline: none;
  }
`;
SearchInput.SelectBox = styled.div<Pick<SearchInputItemProps, 'itemSelected'>>`
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

SearchInput.OptionContainer = styled.div<Pick<SearchInputItemProps, 'active'>>`
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
SearchInput.Selected = styled.div<Pick<SearchInputItemProps, 'active'>>`
  border: 1px solid ${GAINS_BORO};
  border-radius: 3px;
  position: relative;
  order: 0;
  padding: ${__spacing.small};
  cursor: pointer;
`;
SearchInput.Wrapper = styled.div`
  label {
    font-size: ${fontSizes.small};
    color: ${GRAY};
  }
  margin-bottom: ${__spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;
