/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input, { SharedInputProps } from 'components/ui/Input';
import InputErrors from 'components/ui/InputErrors';
import __spacing from 'settings/__spacing';
import { fontSizes } from 'settings/__fonts';
import { DropdownItemProps } from 'components/ui/DropdownItem';

interface ChildrenProps {
  handleClick: (e, value: string | number, text: React.ReactNode) => void;
}

interface SearchInputProps extends SharedInputProps {
  children: (props: ChildrenProps) => React.ReactNode;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function SearchInput(props: SearchInputProps) {
  const {
    children,
    handleChange,
    title,
    name,
    handleBlur,
    tabIndex,
    errorFeedback,
    placeholder = 'Select an Item',
    required = false,
  } = props;
  const [active, setActive] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);
  const [currentChildNode, setCurrentChildNode] = useState(<div>{placeholder}</div>);

  const handleClick = (e, value: string | number | Record<string, any>, node: any): void => {
    e.preventDefault();
    setCurrentChildNode(node);
    setActive(false);
    setItemSelected(true);
    e.target.name = name;
    e.target.value = value;
    handleChange(e);
  };
  function composeProps(): ChildrenProps {
    return {
      handleClick,
    };
  }
  function onBlur(e) {
    e.preventDefault();
    handleBlur && handleBlur(e);
    setActive(false);
  }
  function toggleActive() {
    setActive(!active);
  }
  function onKeyDown(e) {
    e.preventDefault();
    if (e.keyCode === 32 || e.keyCode === 13) {
      toggleActive();
    }
  }

  return (
    <Input.Container onBlur={onBlur} onKeyDown={onKeyDown}>
      <Input.Label required={required}>{title}</Input.Label>
      <Input.Content tabIndex={tabIndex}>
        <SearchInput.SelectBox itemSelected={itemSelected}>
          <SearchInput.OptionContainer active={active}>{children(composeProps())}</SearchInput.OptionContainer>

          <SearchInput.Selected active={active} onClick={toggleActive} onKeyPress={toggleActive}>
            {currentChildNode}
          </SearchInput.Selected>
        </SearchInput.SelectBox>
      </Input.Content>
      <InputErrors errorFeedback={errorFeedback} />
    </Input.Container>
  );
}

SearchInput.SelectBox = styled.div<Pick<DropdownItemProps, 'itemSelected'>>`
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

SearchInput.OptionContainer = styled.div<Pick<DropdownItemProps, 'active'>>`
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
SearchInput.Selected = styled.div<Pick<DropdownItemProps, 'active'>>`
  border-radius: 3px;
  order: 0;
  padding: ${__spacing.small};
  cursor: pointer;
  &::after {
    content: '\f3d0';
    font-family: 'Ionicons';
    font-size: 20px;
    font-size: ${fontSizes.medium};
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    height: 100%;
    right: 10px;
    top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s;
    ${props =>
      props.active &&
      `
   transform: rotateX(180deg);
   top: 0;
  `}
  }
`;
