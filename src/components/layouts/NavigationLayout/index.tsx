import * as React from 'react';
import styled from '@emotion/styled';

import OrganizationHeader from 'components/ui/OrganizationHeader';
import OrganizationSideBar, { SideBarItem } from 'components/ui/OrganizationSideBar';
import Icon from 'components/ui/Icon';
import { fontSizes, fontWeights } from 'settings/__fonts';

interface NavigationLayoutProps {
  currentDisplay: number;
  children: React.ReactNode;
  imgUrl: string;
  title: string;
}
export default function NavigationLayout(props: NavigationLayoutProps) {
  const { currentDisplay, children, imgUrl, title } = props;
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
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </NavigationLayout.Wrapper>
  );
}

NavigationLayout.Wrapper = styled.div`
  h1 {
    font-size: ${fontSizes.large};
    font-weight: ${fontWeights.bold};
    margin-bottom: 5%;
  }
  main {
    margin-left: 5rem;
    padding: 3% 7% 0;
  }
`;
