import * as React from 'react';
import styled from '@emotion/styled';
import { BRAND_PRIMARY } from 'settings/__color';
import { fontSizes } from 'settings/__fonts';

interface QuickActionProps {
  onClick: React.EventHandler<React.SyntheticEvent>;
  children: React.ReactNode;
}
export default function InputQuickAction(props: QuickActionProps) {
  const { children, onClick } = props;
  return <InputQuickAction.Wrapper onClick={onClick}>{children}</InputQuickAction.Wrapper>;
}

InputQuickAction.Wrapper = styled.div`
  font-size: ${fontSizes.small};
  color: ${BRAND_PRIMARY};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
