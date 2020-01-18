import * as React from 'react';
import styled from '@emotion/styled';

import Icon from 'components/ui/Icon';
import Logo from 'components/ui/Logo';
import __spacing from 'settings/__spacing';

export default function NavBar(): React.ReactElement<{}> {
  return (
    <NavBar.Wrapper>
      <Logo hasText={false} />
      <Icon iconType="md-menu" size="LARGE" />
    </NavBar.Wrapper>
  );
}

NavBar.Wrapper = styled.nav`
  padding: ${__spacing.small};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
`;
