import * as React from 'react';
import ApplianceCategoryLayout from '.';
import { action } from '@storybook/addon-actions';
import { defaultMeta } from 'store/reducers/setting';
export default {
  component: ApplianceCategoryLayout,
  title: 'components/layouts/ApplianceCategoryLayout',
};

export const emptyStructure = () => {
  const values = { search: '', tabSelected: 0 };
  const applianceCategory = {
    name: 'Generator',
    description: 'A beautiful Genset gropuer',
  };
  const appliances = {
    data: [],
    fetching: false,
    fetched: true,
    meta: defaultMeta,
  };
  return (
    <ApplianceCategoryLayout
      appliances={appliances}
      handleSearchAppliance={action('Searching Appliance')}
      fetchData={action('Fetching...')}
      params={{}}
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
  const appliances = {
    data: [],
    fetching: false,
    fetched: true,
    meta: defaultMeta,
  };
  return (
    <ApplianceCategoryLayout
      appliances={appliances}
      handleSearchAppliance={action('Searching Appliance')}
      fetchData={action('Fetching...')}
      params={{}}
      values={values}
      applianceCategory={applianceCategory}
      handleObjectClicked={action('objectClicked')}
      handleCreateBtnClicked={action('create New')}
    />
  );
};
