import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Tab, { TabItem, TabProps } from '.';
import Icon from 'components/ui/Icon';
export default {
  component: Tab,
  title: 'components/ui/Tab',
};

function onTabChange(value) {
  action('Tab changed to ' + value)();
}
export const orgPortalTabs = () => {
  return (
    <Tab onTabChange={onTabChange}>
      {({ setTab, tab }) => (
        <>
          <TabItem setTab={setTab} itemValue={0} currentValue={tab}>
            Appliance Category
          </TabItem>
          <TabItem setTab={setTab} itemValue={1} currentValue={tab}>
            Parameters
          </TabItem>
          <TabItem setTab={setTab} itemValue={2} currentValue={tab}>
            Units
          </TabItem>
        </>
      )}
    </Tab>
  );
};

export const authPage = () => {
  return (
    <Tab onTabChange={onTabChange}>
      {({ setTab, tab }) => (
        <>
          <TabItem setTab={setTab} itemValue={0} currentValue={tab}>
            Sign Up
          </TabItem>
          <TabItem setTab={setTab} itemValue={1} currentValue={tab}>
            Login
          </TabItem>
        </>
      )}
    </Tab>
  );
};

export const IconsInTabs = () => {
  return (
    <Tab onTabChange={onTabChange}>
      {({ setTab, tab }) => (
        <>
          <TabItem setTab={setTab} itemValue={0} currentValue={tab}>
            <Icon iconType="md-thumbs-up" size="LARGE" color="SUCCESS" />
          </TabItem>
          <TabItem setTab={setTab} itemValue={1} currentValue={tab}>
            <Icon iconType="md-star" size="LARGE" color="INFO" />
          </TabItem>
        </>
      )}
    </Tab>
  );
};
