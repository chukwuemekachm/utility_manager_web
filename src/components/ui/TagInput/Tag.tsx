import React from 'react';
import styled from '@emotion/styled';

import Icon from 'components/ui/Icon';
import __spacing from 'settings/__spacing';
import { fontSizes } from 'settings/__fonts';

export interface TagProps {
  handleClick: React.EventHandler<React.SyntheticEvent>;
  tagValue: string;
}

export default function Tag(props: TagProps) {
  const { tagValue, handleClick } = props;
  return (
    <Tag.Wrapper>
      <span>{tagValue}</span>
      <span onClick={handleClick}>
        <Icon iconType="md-close" />
      </span>
    </Tag.Wrapper>
  );
}
Tag.Wrapper = styled.div`
  border: 1px solid #ccc;
  margin: ${__spacing.xSmall};
  padding: ${__spacing.xSmall};
  display: flex;
  font-size: ${fontSizes.small};
  align-items: center;
  border-radius: 3px;
  background-color: #f2f2f2;
  cursor: default;
  i {
    margin-left: ${__spacing.xSmall};
  }
`;
