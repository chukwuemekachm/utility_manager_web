import * as React from 'react';
import ApplianceCategoryLayout from '.';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: ApplianceCategoryLayout,
  title: 'components/layouts/ApplianceCategoryLayout',
};
const handleChange = () => true;
export const emptyStructure = () => {
  const values = { search: '', tabSelected: 0 };
  const applianceCategory = {
    name: 'Generator',
    description: 'A beautiful Genset gropuer',
  };
  return (
    <ApplianceCategoryLayout
      handleChange={handleChange}
      values={values}
      applianceCategory={applianceCategory}
      handleObjectClicked={action('objectClicked')}
      handleCreateBtnClicked={action('create New')}
    />
  );
};

export const layoutWithContnent = () => {
  const applianceCategory = {
    name: 'Generator',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque dolorum eum nobis obcaecati, perferendis
        praesentium quis rerum? A culpa cum error incidunt nemo neque quaerat quas quasi quo voluptates! Eos fuga modi
        molestiae, mollitia necessitatibus nulla quasi quod sint suscipit vitae! Eum id numquam quaerat quidem vero!
        Alias animi aut dolores eligendi excepturi harum minima quam rem tenetur voluptatem. Aliquam distinctio ea eos
        ex impedit quia quisquam vero voluptatum! Assumenda blanditiis commodi dicta dolores eaque fugiat ipsa laborum
        odio rerum unde? Doloribus illo inventore officiis possimus reprehenderit similique soluta! Assumenda cum
        cupiditate dolorum hic illo, itaque labore magnam maxime non perferendis, ratione recusandae reprehenderit ullam
        veniam voluptatem. A ad asperiores beatae dolore doloremque ex harum ipsam magni numquam perspiciatis! Culpa
        dicta et in minus nisi, praesentium quis ullam vero! Autem corporis earum labore magnam modi obcaecati
        temporibus. Amet distinctio dolore non quam velit! Autem ipsam maxime optio saepe tempora! Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Aliquid atque dolorum eum nobis obcaecati, perferendis praesentium quis
        rerum? A culpa cum error incidunt nemo neque quaerat quas quasi quo voluptates! Eos fuga modi molestiae,
        mollitia necessitatibus nulla quasi quod sint suscipit vitae! Eum id numquam quaerat quidem vero! Alias animi
        aut dolores eligendi excepturi harum minima quam rem tenetur voluptatem. Aliquam distinctio ea eos ex impedit
        quia quisquam vero voluptatum! Assumenda blanditiis commodi dicta dolores eaque fugiat ipsa laborum odio rerum
        unde? Doloribus illo inventore officiis possimus reprehenderit similique soluta! Assumenda cum cupiditate
        dolorum hic illo, itaque labore magnam maxime non perferendis, ratione recusandae reprehenderit ullam veniam
        voluptatem. A ad asperiores beatae dolore doloremque ex harum ipsam magni numquam perspiciatis! Culpa dicta et
        in minus nisi, praesentium quis ullam vero! Autem corporis earum labore magnam modi obcaecati temporibus. Amet
        distinctio dolore non quam velit! Autem ipsam maxime optio saepe tempora!
    `,
  };

  const values = { search: '', tabSelected: 0 };
  return (
    <ApplianceCategoryLayout
      handleChange={handleChange}
      values={values}
      applianceCategory={applianceCategory}
      handleObjectClicked={action('objectClicked')}
      handleCreateBtnClicked={action('create New')}
    />
  );
};
