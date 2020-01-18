import React from 'react';
import { text } from '@storybook/addon-knobs';
import UserProfileCard, { UserProfileCardProps } from '.';

export default {
  component: UserProfileCard,
  title: 'components/ui/UserProfileCard',
};

const imgUrl =
  'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80';

const firstNameLabel = 'firstName';
const firstNameValue = 'Samuel';

const lastNameLabel = 'lastName';
const lastNameValue = 'Edwards';

const emailLabel = 'email';
const emailValue = 'samuel.edwards@gmail.com';

export const userProfileCard = (): React.ReactElement<UserProfileCardProps> => (
  <UserProfileCard
    imgUrl={imgUrl}
    firstName={text(firstNameLabel, firstNameValue)}
    lastName={text(lastNameLabel, lastNameValue)}
    email={text(emailLabel, emailValue)}
  />
);
