import * as React from 'react';
import SettingsPageLayout from '.';

export default {
  component: SettingsPageLayout,
  title: 'components/layouts/SettingsPageLayout',
};

export const emptyStructure = () => {
  return <SettingsPageLayout />;
};

export const layoutWithContnent = () => {
  const applianceCategories = [
    ['Generators', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'],
    ['Pumps', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'],
    ['Lifts', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'],
    ['Motor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'],
    ['Wind Mill', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'],
    ['Regulator', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'],
  ];

  const parameters = [
    ['Voltage', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'],
    ['Current', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'],
    ['Ampere', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'],
  ];

  const units = [
    ['J', 'Joules'],
    ['A', 'Current'],
  ];

  return <SettingsPageLayout units={units} applianceCategories={applianceCategories} parameters={parameters} />;
};
