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
  const defaultMeta = {
    currentPage: 0,
    nextPage: null,
    previousPage: null,
    totalObjects: 0,
    totalPages: 1,
    maxObjectsPerPage: 0,
  };
  const settingsObject = {
    fetching: false,
    fetched: true,
    data: [],
    meta: defaultMeta,
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
      symbol: 'A',
    },
    {
      id: '-LrsZYnoZ7aK729tvFkn',
      name: 'Atmosphere',
      symbol: 'atm',
    },
    {
      id: '-LsDg17oyhU4atfTIrz1',
      name: 'Becquerel',
      symbol: 'Bq',
    },
    {
      id: '-LrsZYnoa9cM94BvxHmp',
      name: 'Calories',
      symbol: 'Cal',
    },
    {
      id: '-LsDg17k4aww265nBAyX',
      name: 'Coulomb',
      symbol: 'C',
    },
    {
      id: '-Ls3N32fCSwaqsz00Hrm',
      name: 'Decibels',
      symbol: 'Db',
    },
    {
      id: '-LsDg17nnRABjB45Qq4K',
      name: 'Degree Celsius',
      symbol: 'degC',
    },
    {
      id: '-LsDg17lPaQfexBpsue_',
      name: 'Farad',
      symbol: 'F',
    },
    {
      id: '-LrsZYnpSwOVOfeeD5_7',

      name: 'Feet',
      symbol: 'ft',
    },
  ];

  const defaultMeta = {
    currentPage: 0,
    nextPage: null,
    previousPage: null,
    totalObjects: 0,
    totalPages: 1,
    maxObjectsPerPage: 0,
  };
  const settingsObject = {
    fetching: false,
    fetched: true,
    data: units,
    meta: defaultMeta,
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
