import * as React from 'react';
import styled from '@emotion/styled';

import { BRAND_PRIMARY, GRAY } from 'settings/__color';
import { fontWeights, fontSizes } from 'settings/__fonts';

import Link from 'components/ui/Link';
interface FooterProps {
  title: string;
}

export default function Footer(props: FooterProps): React.ReactElement<FooterProps> {
  const { title = 'Sign Up' } = props;

  return (
    <Footer.Wrapper>
      {`By clicking ${title} you agree to the `}
      <Link href="#">Terms &amp; Condition</Link> of Utility Manager.
    </Footer.Wrapper>
  );
}

Footer.Wrapper = styled.footer`
  color: ${GRAY};
  font-size: ${fontSizes.small};

  // a {
  //   color: ${BRAND_PRIMARY};
  //   font-weight: ${fontWeights.bold};
  // }
`;
