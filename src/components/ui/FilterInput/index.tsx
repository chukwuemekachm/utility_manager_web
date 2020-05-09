import * as React from 'react';
import Icon, { IconProps } from 'components/ui/Icon';
import styled from '@emotion/styled';
import __color from 'settings/__color';

interface IconButtonProps {
  label: string;
  width: string;
  iconProps: IconProps;
  onClick: (e) => void;
}
export default function FilterInput(props: IconButtonProps) {
  const { width, iconProps, label, onClick } = props;
  return (
    <FilterInput.Wrapper width={width} onClick={onClick}>
      <Icon {...iconProps} /> <span>{label}</span>
    </FilterInput.Wrapper>
  );
}

FilterInput.Wrapper = styled.div<Pick<IconButtonProps, 'width'>>`
  color: ${__color.BRAND_PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || '20%'};
  padding: 1% 2%;
  background-color: ${__color.BRAND_WHITE};
  box-shadow: 0 0 2px ${__color.LIGHT_GRAY};
  border-radius: 4px 4px;
  > span {
    margin-left: 5%;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 2px ${__color.GRAY};
  }
`;
