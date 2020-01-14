import React from 'react';
import { text } from '@storybook/addon-knobs';
import OrganisationCard from '.';

const imageUrl =
  'https://res.cloudinary.com/xrole/image/upload/v1578660628/BlueFlameIndoors/ThinkTech/organisation-image.jpg';
const image = 'image';
const name = 'Company-Inc Engineering';
const role = 'lorem Ipsum';
const date = 'March 10, 2019';

export default {
  component: OrganisationCard,
  title: 'components/ui/OrganisationCard',
};

export const card = () => (
  <OrganisationCard
    img={text(image, imageUrl)}
    name={text('text', name)}
    role={text('role', role)}
    date={text('date', date)}
  ></OrganisationCard>
);
