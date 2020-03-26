import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, object, boolean } from '@storybook/addon-knobs';
import DashBoardLayout, { DashBoardLayoutProps } from '.';

export default {
  component: DashBoardLayout,
  title: 'components/layouts/DashBoardLayout',
};

const firstNameLabel = 'firstName';
const firstNameValue = 'Samuel';

const lastNameLabel = 'lastName';
const lastNameValue = 'Edwards';

const emailLabel = 'email';
const emailValue = 'samuel.edwards@gmail.com';

const pageTitleLabel = 'pageTitle';
const pageTitleValue = 'My Organisations';

const imageURLLabel = 'imageURL';
const imageURLValue =
  'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80';

export const dashBoardLayout = (): React.ReactElement<DashBoardLayoutProps> => (
  <DashBoardLayout
    firstName={text(firstNameLabel, firstNameValue)}
    lastName={text(lastNameLabel, lastNameValue)}
    email={text(emailLabel, emailValue)}
    pageTitle={text(pageTitleLabel, pageTitleValue)}
    imageURL={text(imageURLLabel, imageURLValue)}
    hideNavMenu={action('show')}
    callLogout={() => 'logout'}
  >
    DashBoard Components
  </DashBoardLayout>
);
