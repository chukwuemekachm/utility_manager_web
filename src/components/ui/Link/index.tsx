import * as React from 'react';
import styled from '@emotion/styled';

import { BRAND_PRIMARY } from 'settings/__color';
import { fontWeights } from 'settings/__fonts';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  handleClick?: React.EventHandler<React.SyntheticEvent>;
}
export default function Link({ href, children, handleClick }: LinkProps) {
  return (
    <Link.Anchor href={href} onClick={handleClick}>
      {children}
    </Link.Anchor>
  );
}

Link.Anchor = styled.a`
  color: ${BRAND_PRIMARY};
  font-weight: ${fontWeights.bold};
`;
