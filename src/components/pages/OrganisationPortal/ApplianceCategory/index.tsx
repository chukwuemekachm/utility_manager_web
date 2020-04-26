import * as React from 'react';
import ApplianceCategoryLayout from 'components/layouts/ApplianceCategoryLayout';
import { OrgPortalProps } from 'components/pages/OrganisationPortal';
import AddApplianceModal from './AddApplianceModal';
import { connect } from 'react-redux';
import { match } from 'react-router';
import withOrganisationPortalContainer from 'components/containers/OrganisationPortalContainer';
import {
  resetSettingsStatus,
  fetchSingleApplianceCategory,
  fetchParameters,
  createAppliance,
  fetchAppliances,
} from 'store/actions/setting';
import { SettingObjectType } from 'store/reducers/setting';
import { useSearchDebounce } from '../../../../helpers/customHooks';

interface CategoryProps extends OrgPortalProps {
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
  match: match<{
    orgId: string;
    categoryId: string;
  }>;
  fetchSingleApplianceCategory: Function;
  fetchCategoryAppliances: (payload: any) => void;
  category: Record<string, any>;
  categoryAppliances: SettingObjectType;
  parameters: SettingObjectType;
  retrieveParameters: (payload) => void;
}

export function ApplianceCategory(props: CategoryProps) {
  const {
    handleSubmit,
    match: { params },
    fetchSingleApplianceCategory,
    category,
    categoryAppliances,
    parameters,
    retrieveParameters,
    fetchCategoryAppliances,
  } = props;
  const defaultValues = {
    search: '',
  };

  const [showModal, setShowModal] = React.useState(false);
  const [values, setValues] = React.useState(defaultValues);
  const [searchParams] = useSearchDebounce(retrieveParameters, params);
  const [searchAppliance] = useSearchDebounce(fetchCategoryAppliances, params);
  function toggleModal(show: boolean): React.EventHandler<React.SyntheticEvent> {
    return function(e) {
      e.preventDefault();
      setShowModal(show);
    };
  }
  React.useEffect(function(): void {
    fetchSingleApplianceCategory({ params });
    fetchCategoryAppliances({ params });
  }, []);

  function handleSearchAppliance(e) {
    const {
      target: { value, name },
    } = e;
    searchAppliance(value);
    setValues(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSearchParamInForm(e) {
    searchParams(e.target.value);
  }

  return (
    <div>
      <ApplianceCategoryLayout
        handleCreateBtnClicked={toggleModal(true)}
        applianceCategory={category.data}
        appliances={categoryAppliances}
        params={params}
        values={values}
        handleSearchAppliance={handleSearchAppliance}
        fetchData={fetchCategoryAppliances}
      />
      {showModal && (
        <AddApplianceModal
          hideModal={toggleModal(false)}
          handleSubmit={handleSubmit}
          categoryName={category.data.name}
          searchedParams={parameters}
          handleSearchParameters={handleSearchParamInForm}
          // apiErrors={createApplianceCategory.errors}
        />
      )}
    </div>
  );
}
const mapStateToProps = ({ setting: { singleApplianceCategory, appliance, parameters } }) => ({
  category: singleApplianceCategory,
  categoryAppliances: appliance,
  parameters,
});
const mapDispatchToProps = dispatch => ({
  fetchSingleApplianceCategory: (payload): void => dispatch(fetchSingleApplianceCategory(payload)),
  fetchCategoryAppliances: (payload): void => dispatch(fetchAppliances(payload)),
  retrieveParameters: (payload): void => dispatch(fetchParameters(payload)),
  callCreateAppliance: (payload): void => dispatch(createAppliance(payload)),
  resetStatus: (payload): void => dispatch(resetSettingsStatus(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withOrganisationPortalContainer(ApplianceCategory));
