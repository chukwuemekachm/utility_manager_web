import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Tab, { TabItem } from '.';
import Icon from 'components/ui/Icon';
export default {
  component: Tab,
  title: 'components/ui/Tab',
};

export const orgPortalTabs = () => (
  <Tab>
    <TabItem onClick={action('Tab Clicked')} selected={boolean('Appliance Category', true)}>
      Appliance Category
    </TabItem>
    <TabItem onClick={action('Tab Clicked')} selected={boolean('Parameters', false)}>
      Parameters
    </TabItem>
    <TabItem onClick={action('Tab Clicked')} selected={boolean('Units', false)}>
      Units
    </TabItem>
  </Tab>
);

export const authPage = () => (
  <Tab>
    <TabItem onClick={action('Tab Clicked')} selected={boolean('Sign Up', true)}>
      Sign Up
    </TabItem>
    <TabItem onClick={action('Tab Clicked')} selected={boolean('Login', false)}>
      Login
    </TabItem>
  </Tab>
);

export const IconsInTabs = () => (
  <Tab>
    <TabItem onClick={action('Tab Clicked')} selected={boolean('Likes', true)}>
      <Icon iconType="md-thumbs-up" size="LARGE" color="SUCCESS" />
    </TabItem>
    <TabItem onClick={action('Tab Clicked')} selected={boolean('Rating', false)}>
      <Icon iconType="md-star" size="LARGE" color="INFO" />
    </TabItem>
  </Tab>
);
