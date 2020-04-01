import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import OrganizationSideBar, { SideBarItem } from '.';
import Icon from 'components/ui/Icon';
import { action } from '@storybook/addon-actions';
export default {
  component: OrganizationSideBar,
  title: 'components/ui/OrganizationSideBar',
};

export const organizationSideBar = (): React.ReactElement => (
  <OrganizationSideBar>
    <SideBarItem onClick={action('Clicked')} active={boolean('report', false)}>
      <Icon iconType="md-podium" size="LARGE" color="WHITE" />
    </SideBarItem>
    <SideBarItem onClick={action('Clicked')} active={boolean('charts', false)}>
      <Icon iconType="md-podium" size="LARGE" color="WHITE" />
    </SideBarItem>
    <SideBarItem onClick={action('Clicked')} active={boolean('settings', true)}>
      <Icon iconType="md-build" size="LARGE" color="WHITE" />
    </SideBarItem>
    <SideBarItem onClick={action('Clicked')} active={boolean('members', false)}>
      <Icon iconType="md-people" size="LARGE" color="WHITE" />
    </SideBarItem>
  </OrganizationSideBar>
);
