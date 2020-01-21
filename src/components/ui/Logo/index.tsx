import * as React from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';
import { BRAND_PRIMARY, BRAND_WHITE } from 'settings/__color';
import { fontWeights } from 'settings/__fonts';
import Icon from 'components/ui/Icon';

export interface LogoProps {
  hasText?: boolean;
}

export default function Logo({ hasText = true }: LogoProps): React.ReactElement<LogoProps> {
  return (
    <Logo.Wrapper>
      <Logo.IconWrapper>
        <Icon iconType="md-construct" size="NORMAL" color="WHITE" />
      </Logo.IconWrapper>
      {hasText && 'Utility Manager'}
    </Logo.Wrapper>
  );
}

Logo.Wrapper = styled.div<LogoProps>`
  display: flex;
  align-items: baseline;
  font-weight: ${fontWeights.normal};
  margin: 0;
`;

Logo.IconWrapper = styled.span`
  width: ${__spacing.xLarge};
  height: ${__spacing.xLarge};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${BRAND_PRIMARY};
  color: ${BRAND_WHITE};
  margin-right: ${__spacing.xSmall};
  box-shadow: rgba(153, 153, 153, 0.1) 0px 0.32em 2em;
`;
