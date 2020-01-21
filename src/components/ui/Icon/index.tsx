import * as React from 'react';
import styled from '@emotion/styled';

import { DARK_GRAY, BRAND_WHITE } from 'settings/__color';
import { fontSizes } from 'settings/__fonts';

export type Color = 'WHITE' | 'GREY';
export type Size = 'NORMAL' | 'LARGE';

export interface IconProps {
  iconType: string;
  color?: Color;
  size?: Size;
}

interface WrapperProps {
  color: string;
  size: string;
}

export default function Icon({ iconType, color, size }: IconProps): React.ReactElement<IconProps> {
  const iconColor = color === 'WHITE' ? BRAND_WHITE : DARK_GRAY;
  const iconSize = size === 'LARGE' ? fontSizes.large : fontSizes.normal;

  return <Icon.Wrapper className={`icon ion-${iconType}`} color={iconColor} size={iconSize} />;
}

Icon.Wrapper = styled.i<WrapperProps>`
  display: inline;
  justify-content: center;
  align-items: center;
  color: ${({ color }): string => color};
  font-size: ${({ size }): string => size};
`;
