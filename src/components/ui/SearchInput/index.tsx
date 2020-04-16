/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';
import { fontSizes } from 'settings/__fonts';

import Input, { SharedInputProps } from 'components/ui/Input';
import InputQuickAction from 'components/ui/InputQuickAction';
import InputErrors from 'components/ui/InputErrors';
import { BRAND_PRIMARY, GAINS_BORO } from 'settings/__color';

interface SearchInputItemProps {
  children: React.ReactNode;
  value: string | number;
  onClick: (value: string | number, children: React.ReactNode) => void;
  active?: boolean;
  itemSelected?: boolean;
}

interface ChildrenProps {
  handleClick: (e, value: string | number, text: React.ReactNode) => void;
}

interface SearchInputProps extends SharedInputProps {
  children: (props: ChildrenProps) => React.ReactNode;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function SearchInput(props: SearchInputProps) {
  const {
    name,
    errorFeedback,
    children,
    title = '',
    placeholder = 'Enter Value',
    tabIndex,
    handleChange,
    handleTextInputChange,
    required,
  } = props;

  const [active, setActive] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [autoFocus, setAutoFocus] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const [currentChildNode, setCurrentChildNode] = useState();

  const handleClick = (e, value: string | number, node: any): void => {
    setCurrentChildNode(node);
    setActive(false);
    setItemSelected(true);
    setShowInput(false);
    setCurrentValue('');
    setAutoFocus(true);
    e.target.name = name;
    e.target.value = value;
    handleChange(e);
  };
  const onChange = e => {
    setAutoFocus(true);
    setCurrentValue(e.target.value);
    if (e.target.value.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
    handleTextInputChange(e);
  };

  function onClear(e) {
    setCurrentChildNode(<SearchInput.Placeholder>{placeholder}</SearchInput.Placeholder>);
    e.target.name = name;
    e.target.value = '';
    setCurrentValue('');
    setItemSelected(false);
    handleChange(e);
  }
  function blurHandler(e) {
    if (!itemSelected) {
      setCurrentChildNode(<SearchInput.Placeholder>{placeholder}</SearchInput.Placeholder>);
    }
    setAutoFocus(true);
    setShowInput(false);
  }

  function contentClickHandler(e) {
    e.preventDefault();
    setShowInput(true);
    setAutoFocus(true);
  }
  function composeProps(): ChildrenProps {
    return {
      handleClick,
    };
  }

  return (
    <Input.Container tabIndex={tabIndex}>
      <Input.Label required={required}>{title}</Input.Label>
      <SearchInput.SelectBox itemSelected={itemSelected}>
        <SearchInput.OptionContainer active={active}>{children(composeProps())}</SearchInput.OptionContainer>
        <SearchInput.Content onBlur={blurHandler} onClick={contentClickHandler}>
          {showInput && (
            <input
              autoFocus={autoFocus}
              type="text"
              onChange={onChange}
              value={currentValue}
              placeholder={placeholder}
            />
          )}
          {!showInput && <SearchInput.SearchBox>{currentChildNode}</SearchInput.SearchBox>}
        </SearchInput.Content>
      </SearchInput.SelectBox>
      {itemSelected && <InputQuickAction onClick={onClear}>Clear</InputQuickAction>}
      <InputErrors errorFeedback={errorFeedback}></InputErrors>
    </Input.Container>
  );
}
SearchInput.Placeholder = styled.div`
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;
SearchInput.SearchBox = styled.div`
  height: 100%;
  padding: ${__spacing.small};
`;

SearchInput.Content = styled.div`
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
