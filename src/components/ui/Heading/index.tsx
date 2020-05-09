import * as React from 'react';
import styled from '@emotion/styled';
import { fontSizes } from 'settings/__fonts';
import __color from 'settings/__color';

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  size?: string;
  css?: string;
  children: React.ReactNode;
  align?: 'center' | 'left' | 'right' | 'inherit';
}

export default function Heading(props: HeadingProps) {
  const { type = 'h1', size = 'normal', color = 'black', css = '', children, align } = props;
  const HeadingElement = styled[type]`
    margin: 0;
    color: ${__color[color]};
    font-size: ${fontSizes[size] || fontSizes.normal};
    text-align: ${align || 'inherit'};
    ${css}
  `;

  return <HeadingElement>{children}</HeadingElement>;
}
