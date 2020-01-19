import * as React from 'react';
import styled from '@emotion/styled';

import Icon from 'components/ui/Icon';
import Logo from 'components/ui/Logo';
import __spacing from 'settings/__spacing';
import { BRAND_WHITE, WHITE_SMOKE } from 'settings/__color';

export default function NavBar(): React.ReactElement<{}> {
  return (
    <NavBar.Wrapper>
      <Logo hasText={false} />
      <Icon iconType="md-menu" size="LARGE" />
    </NavBar.Wrapper>
  );
}

NavBar.Wrapper = styled.nav`
  padding: ${__spacing.normal};
  display: flex;
  justify-content: space-between;
  background-color: ${BRAND_WHITE};
  border-bottom: 1px solid ${WHITE_SMOKE};
`;
