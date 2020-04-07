import * as React from 'react';
import styled from '@emotion/styled';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import ApplianceCategoryLayout from 'components/layouts/ApplianceCategoryLayout';
import { OrgPortalProps } from 'components/pages/OrganisationPortal';
import AddAppliance from './AddAppliance';
import { connect } from 'react-redux';
import withOrganisationPortalContainer from 'components/containers/OrganisationPortalContainer';

interface CategoryProps extends OrgPortalProps {
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
}
export function ApplianceCategory(props: CategoryProps) {
  const { handleSubmit } = props;
  const [showModal, setShowModal] = React.useState(false);
  function toggleModal(show: boolean): React.EventHandler<React.SyntheticEvent> {
    return function(e) {
      e.preventDefault();
      setShowModal(show);
    };
  }

  function handleChange() {
    console.log('Wwould add operation here');
  }
  const sampleApplianceCategory = {
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
  const values = {
    search: '',
  };
  return (
    <div>
      <OrgPortalHeading>Generator</OrgPortalHeading>
      <ApplianceCategoryLayout
        handleCreateBtnClicked={toggleModal(true)}
        applianceCategory={sampleApplianceCategory}
        values={values}
        handleChange={handleChange}
      />
      {showModal && (
        <AddAppliance
          hideModal={toggleModal(false)}
          handleSubmit={handleSubmit}
          // apiErrors={createApplianceCategory.errors}
        />
      )}
    </div>
  );
}
ApplianceCategory.Wraapper = styled.div`
  // padding-right: 10%;
`;

export default connect(null, null)(withOrganisationPortalContainer(ApplianceCategory));
