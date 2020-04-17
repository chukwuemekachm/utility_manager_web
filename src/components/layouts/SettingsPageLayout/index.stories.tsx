import * as React from 'react';
import SettingsPageLayout from '.';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: SettingsPageLayout,
  title: 'components/layouts/SettingsPageLayout',
};
const handleTabChange = () => true;
const handleChange = () => true;
export const emptyStructure = () => {
  const values = { search: '', tabSelected: 0 };

  const settingsObject = {
    fetching: false,
    fetched: true,
    data: [],
    meta: null,
  };
  const params = {
    orgId: '',
  };
  return (
    <SettingsPageLayout
      values={values}
      handleChange={handleChange}
      handleTabChange={handleTabChange}
      currentWindow={number('currentWindow', 0)}
      handleObjectClicked={() => action('objectClicked')}
      handleCreateBtnClicked={action('create New')}
      settingsObjects={settingsObject}
      type="UNIT"
      fetchData={action('Fetching')}
      params={params}
    />
  );
};

export const layoutWithContnent = () => {
  const units = [
    {
      id: '-Ls3N32e3WL3iqV4SHNW',
      name: 'Ampere',
      letterSymbol: 'A',
    },
    {
      id: '-LrsZYnoZ7aK729tvFkn',
      name: 'Atmosphere',
      letterSymbol: 'atm',
    },
    {
      id: '-LsDg17oyhU4atfTIrz1',
      name: 'Becquerel',
      letterSymbol: 'Bq',
    },
    {
      id: '-LrsZYnoa9cM94BvxHmp',
      name: 'Calories',
      letterSymbol: 'Cal',
    },
    {
      id: '-LsDg17k4aww265nBAyX',
      name: 'Coulomb',
      letterSymbol: 'C',
      greekSymbol: null,
    },
    {
      id: '-Ls3N32fCSwaqsz00Hrm',
      name: 'Decibels',
      letterSymbol: 'Db',
      greekSymbol: null,
    },
    {
      id: '-LsDg17nnRABjB45Qq4K',
      name: 'Degree Celsius',
      letterSymbol: 'degC',
      greekSymbol: null,
    },
    {
      id: '-LsDg17lPaQfexBpsue_',
      name: 'Farad',
      letterSymbol: 'F',
    },
    {
      id: '-LrsZYnpSwOVOfeeD5_7',

      name: 'Feet',
      letterSymbol: 'ft',
      greekSymbol: null,
    },
  ];

  const settingsObject = {
    fetching: false,
    fetched: true,
    data: units,
    meta: null,
  };
  const params = {
    orgId: '',
  };
  const values = { search: '', tabSelected: 0 };
  return (
    <SettingsPageLayout
      handleChange={handleChange}
      handleTabChange={handleTabChange}
      settingsObjects={settingsObject}
      values={values}
      type="UNIT"
      fetchData={action('Fetching')}
      params={params}
      currentWindow={number('currentWindow', 0)}
      handleObjectClicked={() => action('objectClicked')}
      handleCreateBtnClicked={action('create New')}
    />
  );
};
