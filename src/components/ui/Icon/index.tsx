import * as React from 'react';
import styled from '@emotion/styled';

import { DARK_GRAY, BRAND_WHITE, LIGHT_SEA_GREEN, CRIMSON, ORANGE } from 'settings/__color';
import { fontSizes } from 'settings/__fonts';

export type Color = 'WHITE' | 'GREY' | 'SUCCESS' | 'ERROR' | 'INFO' | string;
export type Size = 'NORMAL' | 'LARGE';

export interface IconProps {
  iconType: string;
  color?: Color;
  size?: Size;
  handleClick?: () => void;
}

interface WrapperProps {
  color: string;
  size: string;
}

export default function Icon({ iconType, color, size, handleClick }: IconProps): React.ReactElement<IconProps> {
  const iconSize = size === 'LARGE' ? fontSizes.large : fontSizes.normal;
  return (
    <Icon.Wrapper
      className={`icon ion-${iconType}`}
      color={color as string}
      size={iconSize}
      onClick={() => {
        if (handleClick) handleClick();
      }}
    />
  );
}

function colorSelector({ color }): string {
  switch (color) {
    case 'WHITE':
      return BRAND_WHITE;
    case 'SUCCESS':
      return LIGHT_SEA_GREEN;
    case 'ERROR':
      return CRIMSON;
    case 'INFO':
      return ORANGE;
    default:
      return DARK_GRAY;
  }
}

Icon.Wrapper = styled.i<WrapperProps>`
  display: inline;
  justify-content: center;
  align-items: center;
  color: ${colorSelector};
  font-size: ${({ size }): string => size};
`;
