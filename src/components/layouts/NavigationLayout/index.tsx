import * as React from 'react';
import styled from '@emotion/styled';

import OrganizationHeader from 'components/ui/OrganizationHeader';
import OrganizationSideBar, { SideBarItem } from 'components/ui/OrganizationSideBar';
import Icon from 'components/ui/Icon';

interface NavigationLayoutProps {
  currentDisplay: number;
  children: React.ReactNode;
  imgUrl: string;
}
export default function NavigationLayout(props: NavigationLayoutProps) {
  const { currentDisplay, children, imgUrl } = props;
  return (
    <NavigationLayout.Wrapper>
      <OrganizationHeader imgUrl={imgUrl} />

      <OrganizationSideBar>
        <SideBarItem active={currentDisplay === 0}>
          <Icon iconType="md-podium" size="LARGE" color="WHITE" />
        </SideBarItem>
        <SideBarItem active={currentDisplay === 1}>
          <Icon iconType="md-podium" size="LARGE" color="WHITE" />
        </SideBarItem>
        <SideBarItem active={currentDisplay === 2}>
          <Icon iconType="md-build" size="LARGE" color="WHITE" />
        </SideBarItem>
        <SideBarItem active={currentDisplay === 3}>
          <Icon iconType="md-people" size="LARGE" color="WHITE" />
        </SideBarItem>
      </OrganizationSideBar>
      <main>{children}</main>
    </NavigationLayout.Wrapper>
  );
}

NavigationLayout.Wrapper = styled.div`
  main {
    margin-left: 5rem;
  }
`;
