import * as React from 'react';
import styled from '@emotion/styled';

import { fontSizes, fontWeights } from 'settings/__fonts';
import __spacing from 'settings/__spacing';

export interface DashBoardTitleProps {
  children: React.ReactNode;
}

export default function DashBoardTitle({ children }: DashBoardTitleProps): React.ReactElement<DashBoardTitleProps> {
  return <DashBoardTitle.Wrapper>{children}</DashBoardTitle.Wrapper>;
}

DashBoardTitle.Wrapper = styled.h2`
  font-style: normal;
  font-weight: ${fontWeights.normal};
  font-size: ${fontSizes.normal};
  text-align: center;
  margin: 0;
  padding: ${__spacing.small};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
`;
