import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import OrganizationSideBar, { SideBarItem } from '.';
import Icon from 'components/ui/Icon';
export default {
  component: OrganizationSideBar,
  title: 'components/ui/OrganizationSideBar',
};

export const organizationSideBar = (): React.ReactElement => (
  <OrganizationSideBar>
    <SideBarItem active={boolean('report', false)}>
      <Icon iconType="md-podium" size="LARGE" color="WHITE" />
    </SideBarItem>
    <SideBarItem active={boolean('charts', false)}>
      <Icon iconType="md-podium" size="LARGE" color="WHITE" />
    </SideBarItem>
    <SideBarItem active={boolean('settings', true)}>
      <Icon iconType="md-build" size="LARGE" color="WHITE" />
    </SideBarItem>
    <SideBarItem active={boolean('members', false)}>
      <Icon iconType="md-people" size="LARGE" color="WHITE" />
    </SideBarItem>
  </OrganizationSideBar>
);
