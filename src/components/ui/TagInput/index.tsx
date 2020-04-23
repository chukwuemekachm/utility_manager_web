import React, { useState } from 'react';
import styled from '@emotion/styled';

import { fontSizes } from 'settings/__fonts';
import __spacing from 'settings/__spacing';
import DropdownItem from 'components/ui/DropdownItem';
import Tag from './Tag';

export interface TagInputProps {
  active?: boolean;
  dropdown: string[];
}

export default function TagInput(props: TagInputProps) {
  const { dropdown } = props;
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const onChange = e => {
    setValue(e.target.value);

    if (e.target.value.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleClick = item => {
    setActive(false);
    setSelectedItems([...selectedItems, item]);
    setValue('');
  };
  const handleDelete = index => {
    setSelectedItems([...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)]);
  };
  return (
    <TagInput.Wrapper>
      {selectedItems.map((tag, index) => {
        return <Tag key={index} tagValue={tag} handleClick={() => handleDelete(index)} />;
      })}
      <input type="text" placeholder="Add Items..." value={value} onChange={onChange} />
      <TagInput.OptionContainer active={active}>
        {dropdown.map(item => {
          return (
            <DropdownItem key={item} value={item} onClick={() => handleClick(item)}>
              {item}
            </DropdownItem>
          );
        })}
      </TagInput.OptionContainer>
    </TagInput.Wrapper>
  );
}

TagInput.Wrapper = styled.div`
  border: 2px solid #ccc;
  padding: ${__spacing.xSmall};
  border-radius: ${__spacing.xSmall};
  display: flex;
  flex-wrap: wrap;
  position: relative;

  input {
    flex: 1;
    font-size: ${fontSizes.small};
    padding: ${__spacing.xSmall};
    outline: none;
    border: 0;
  }
`;

TagInput.OptionContainer = styled.div<Pick<TagInputProps, 'active'>>`
  position: absolute;
  top: 110%;
  width: 100%;
  left: 0;
  transition: all 0.4s;
  overflow: hidden;
  font-size: ${fontSizes.small};
  background: #fff;
  color: black;
  z-index: 1;
  display: none;
  box-shadow: 11px 22px 28px -9px rgba(0, 0, 0, 0.31);

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
