import * as React from 'react';
import styled from '@emotion/styled';

import OrganizationHeader from 'components/ui/OrganizationHeader';
import OrganizationSideBar, { SideBarItem } from 'components/ui/OrganizationSideBar';
import Icon from 'components/ui/Icon';
import { fontSizes, fontWeights } from 'settings/__fonts';
import __spacing from 'settings/__spacing';

interface NavigationLayoutProps {
  currentDisplay: string;
  children: React.ReactNode;
  imgUrl: string;
  changePageHandler?: (pageName: string) => void;
}

export function OrgPortalHeading(props: Pick<NavigationLayoutProps, 'children'>) {
  const { children } = props;
  return <OrgPortalHeading.Content>{children}</OrgPortalHeading.Content>;
}

export default function OrgPortalLayout(props: NavigationLayoutProps) {
  const { currentDisplay, children, imgUrl, changePageHandler } = props;
  function changePage(pageName: string) {
    return function(event) {
      event.preventDefault();
      changePageHandler && changePageHandler(pageName);
    };
  }
  return (
    <OrgPortalLayout.Wrapper>
      <OrganizationHeader imgUrl={imgUrl} />

      <OrganizationSideBar>
        <SideBarItem active={currentDisplay === 'charts'} onClick={changePage('charts')}>
          <Icon iconType="md-analytics" size="LARGE" color="WHITE" />
        </SideBarItem>
        <SideBarItem active={currentDisplay === 'logs'} onClick={changePage('logs')}>
          <Icon iconType="md-book" size="LARGE" color="WHITE" />
        </SideBarItem>
        <SideBarItem active={currentDisplay === 'reports'} onClick={changePage('reports')}>
          <Icon iconType="md-podium" size="LARGE" color="WHITE" />
        </SideBarItem>

        <SideBarItem active={currentDisplay === 'settings'} onClick={changePage('settings')}>
          <Icon iconType="md-build" size="LARGE" color="WHITE" />
        </SideBarItem>
        <SideBarItem active={currentDisplay === 'members'} onClick={changePage('members')}>
          <Icon iconType="md-people" size="LARGE" color="WHITE" />
        </SideBarItem>
      </OrganizationSideBar>
      <main>{children}</main>
    </OrgPortalLayout.Wrapper>
  );
}

OrgPortalHeading.Content = styled.h1`
  font-size: ${fontSizes.large};
  font-weight: ${fontWeights.bold};
  margin-bottom: ${__spacing.normal};
`;

OrgPortalLayout.Wrapper = styled.div`
  main {
    margin-left: 5rem;
    padding: 3% 7% 0;
  }
`;
