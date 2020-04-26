import React, { useState } from 'react';
import styled from '@emotion/styled';

import { fontSizes } from 'settings/__fonts';
import __spacing from 'settings/__spacing';
import { DropdownItemContainer } from 'components/ui/DropdownItem';
import Input, { SharedInputProps } from 'components/ui/Input';
import Tag from './Tag';
import InputErrors from 'components/ui/InputErrors';
import { useDropdownSelectedNodeHandlers } from 'helpers/customHooks';

export interface TagInputProps extends SharedInputProps {
  active?: boolean;
  children: (composedProps) => React.ReactNode;
  handleChange: React.EventHandler<React.SyntheticEvent>;
  handleBlur: React.EventHandler<React.SyntheticEvent>;
  handleSearchValue: (value: string) => void;
}

export default function TagInput(props: TagInputProps) {
  const {
    name = '',
    children,
    required,
    handleSearchValue,
    errorFeedback,
    title,
    placeholder = 'Add Item...',
    handleChange,
    handleBlur,
  } = props;

  const defaultValues = {
    active: false,
    node: [],
    itemSelected: false,
    value: [],
  };

  const handlers = {
    handleBlur,
    handleChange,
    handleSearchValue,
    selectedItemHandler: (prevNode, newNode) => [...prevNode, newNode],
    setValueHandler: (prevValue, newValue) => [...prevValue, newValue],
  };

  const [dropdownValues, dropdownHandlers, setValues] = useDropdownSelectedNodeHandlers(name, defaultValues, handlers);
  const { onBlur, handleClick, onSearchChange } = dropdownHandlers;
  const { active, node: selectedItems, searchText } = dropdownValues;

  const handleDelete = index => {
    const newNode = [...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)];
    setValues(prevState => ({ ...prevState, node: newNode }));
  };

  const composeProps = () => ({
    handleClick,
  });
  return (
    <Input.Container onBlur={onBlur}>
      <Input.Label required={required}>{title}</Input.Label>
      <Input.Content>
        <TagInput.Wrapper>
          {selectedItems.map((tag, index) => {
            return <Tag key={index} tagValue={tag} handleClick={() => handleDelete(index)} />;
          })}
          <input type="text" placeholder={placeholder} value={searchText} onChange={onSearchChange} />
          <DropdownItemContainer active={active}> {children(composeProps())}</DropdownItemContainer>
        </TagInput.Wrapper>
      </Input.Content>
      <InputErrors errorFeedback={errorFeedback} />
    </Input.Container>
  );
}

TagInput.Wrapper = styled.div`
  padding: ${__spacing.xSmall};
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  input {
    flex: 1;
    font-size: ${fontSizes.small};
    padding: ${__spacing.xSmall};
    outline: none;
    border: 0;
  }

  margin-bottom: ${__spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;
