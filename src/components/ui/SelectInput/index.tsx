/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input, { SharedInputProps } from 'components/ui/Input';
import InputErrors from 'components/ui/InputErrors';
import __spacing from 'settings/__spacing';
import { fontSizes } from 'settings/__fonts';
import { DropdownItemContainer, DropdownItemProps } from 'components/ui/DropdownItem';
import { useDropdownSelectedNodeHandlers } from 'helpers/customHooks';
interface ChildrenProps {
  handleClick: (e, value: string | number, text: React.ReactNode) => void;
}

interface SearchInputProps extends SharedInputProps {
  children: (props: ChildrenProps) => React.ReactNode;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function SelectInput(props: SearchInputProps) {
  const {
    children,
    handleChange,
    title,
    name = '',
    handleBlur,
    tabIndex,
    errorFeedback,
    placeholder = 'Select an Item',
    required = false,
  } = props;
  const defaultNode = <div>{placeholder}</div>;
  const defaultValues = {
    active: false,
    node: defaultNode,
    itemSelected: false,
    value: '',
  };

  const handlers = {
    handleBlur,
    handleChange,
  };

  const [dropdownValues, dropdownHandlers] = useDropdownSelectedNodeHandlers(name, defaultValues, handlers);
  const { onBlur, toggleActive, handleClick, onKeyDown } = dropdownHandlers;
  const { active, node: currentChildNode, itemSelected } = dropdownValues;
  function composeProps(): ChildrenProps {
    return {
      handleClick,
    };
  }

  return (
    <Input.Container onBlur={onBlur} onKeyDown={onKeyDown}>
      <Input.Label required={required}>{title}</Input.Label>
      <Input.Content tabIndex={tabIndex}>
        <SelectInput.SelectBox itemSelected={itemSelected}>
          <DropdownItemContainer active={active}>{children(composeProps())}</DropdownItemContainer>

          <SelectInput.Selected active={active} onClick={toggleActive} onKeyPress={toggleActive}>
            {currentChildNode}
          </SelectInput.Selected>
        </SelectInput.SelectBox>
      </Input.Content>
      <InputErrors errorFeedback={errorFeedback} />
    </Input.Container>
  );
}

SelectInput.SelectBox = styled.div<Pick<DropdownItemProps, 'itemSelected'>>`
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

SelectInput.OptionContainer = styled.div<Pick<DropdownItemProps, 'active'>>`
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
SelectInput.Selected = styled.div<Pick<DropdownItemProps, 'active'>>`
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
