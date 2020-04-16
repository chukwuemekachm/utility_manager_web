import * as React from 'react';
import styled from '@emotion/styled';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import ApplianceCategoryLayout from 'components/layouts/ApplianceCategoryLayout';
import { OrgPortalProps } from 'components/pages/OrganisationPortal';
import AddAppliance from './AddAppliance';
import { connect } from 'react-redux';
import { match } from 'react-router';
import withOrganisationPortalContainer from 'components/containers/OrganisationPortalContainer';
import { fetchSingleApplianceCategory } from 'store/actions/setting';

interface CategoryProps extends OrgPortalProps {
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
  match: match<{
    orgId: string;
    categoryId: string;
  }>;
  fetchSingleApplianceCategory: Function;
  category: Record<string, any>;
  categoryAppliances: Record<string, any>;
}

export function ApplianceCategory(props: CategoryProps) {
  const {
    handleSubmit,
    match: { params },
    fetchSingleApplianceCategory,
    category,
    categoryAppliances,
  } = props;
  console.log('props====>', props);
  const [showModal, setShowModal] = React.useState(false);
  function toggleModal(show: boolean): React.EventHandler<React.SyntheticEvent> {
    return function(e) {
      e.preventDefault();
      setShowModal(show);
    };
  }
  React.useEffect(function(): void {
    fetchSingleApplianceCategory({ params });
  }, []);
  function handleChange() {
    console.log('Wwould add operation here');
  }
  const values = {
    search: '',
  };
  return (
    <div>
      <OrgPortalHeading>{category.data.name}</OrgPortalHeading>
      <ApplianceCategoryLayout
        handleCreateBtnClicked={toggleModal(true)}
        applianceCategory={category.data}
        appliances={categoryAppliances.data}
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
const mapStateToProps = ({ setting: { singleApplianceCategory, appliance } }) => ({
  category: singleApplianceCategory,
  categoryAppliances: appliance,
});
const mapDispatchToProps = dispatch => ({
  fetchSingleApplianceCategory: (payload): void => dispatch(fetchSingleApplianceCategory(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withOrganisationPortalContainer(ApplianceCategory));
