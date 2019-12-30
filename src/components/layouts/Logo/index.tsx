import * as React from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';
import { BRAND_PRIMARY, BRAND_WHITE } from 'settings/__color';
import { fontWeights, fontSizes } from 'settings/__fonts';
import __layouts from 'settings/__layouts';

interface LogoProps {
  hasText?: boolean,
}


export default function Logo({ hasText = true }: LogoProps) {
  return (
    <Logo.Wrapper>
      <i className="icon ion-md-construct" />
      { hasText && 'Utility Manager' }
    </Logo.Wrapper>
  );
}

Logo.Wrapper = styled.h2<LogoProps>`
  display: flex;
  align-items: baseline;
  font-weight: ${fontWeights.normal};
  margin: 0;

  i { 
    width: ${fontSizes.xLarge};
    height: ${fontSizes.xLarge};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${BRAND_PRIMARY};
    color: ${BRAND_WHITE};
    margin-right: ${__spacing.xSmall};
    box-shadow: rgba(153, 153, 153, 0.1) 0px 0.32em 2em;
  }
`;
