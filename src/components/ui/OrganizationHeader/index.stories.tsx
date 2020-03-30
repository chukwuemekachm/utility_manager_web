import React from 'react';
import { text } from '@storybook/addon-knobs';
import OrganizationHeader from '.';

export default {
  component: OrganizationHeader,
  title: 'components/ui/OrganizationHeader',
};
const sampleImage =
  'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80';

export const organizationHeader = () => <OrganizationHeader imgUrl={sampleImage} />;
