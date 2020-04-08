import * as React from 'react';
import SettingsPageLayout from 'components/layouts/SettingsPageLayout';
import CreateCategory from './CreateCategory';
import { connect } from 'react-redux';
import {
  createApplianceCategory,
  fetchApplianceCategory,
  createParameters,
  fetchParameters,
  fetchUnits,
} from 'store/actions/setting';
import { SettingObjectType, CreateObjectType } from 'store/reducers/setting';
import { OrgPortalProps } from '../index';
import withOrganisationPortalContainer from 'components/containers/OrganisationPortalContainer';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import { moveToNextPage } from 'store/actions/navigation';
import CreateParameter from './CreateParameter';

interface SettingsProps extends OrgPortalProps {
  applianceCategory: SettingObjectType;
  fetchApplianceCategory: Function;
  fetchUnits: Function;
  fetchParameters: Function;
  parameters: SettingObjectType;
  searchedUnits: SettingObjectType;
  units: SettingObjectType;
  createApplianceCategory: CreateObjectType;
  justCreated: boolean;
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
}
function Settings(props: SettingsProps) {
  const {
    applianceCategory,
    fetchApplianceCategory,
    fetchUnits,
    fetchParameters,
    parameters,
    units,
    createApplianceCategory,
    justCreated,
    match: { params },
    handleSubmit,
    moveToNextPage,
  } = props;
  const defaultValues = {
    search: '',
    tabSelected: 0,
  };
  const defaultCreateCategoryValues = {
    name: '',
    description: '',
  };
  const defaultCreateParameterValues = {
    name: '',
    valueType: '',
    unitId: '',
  };

  const [values, setValues] = React.useState(defaultValues);
  const [currentModal, setCurrentModal] = React.useState(0);
  const [currentWindow, setWindow] = React.useState(0);

  React.useEffect(function(): void {
    fetchApplianceCategory({ params });
  }, []);

  function handleTabChange(tabNumber: number): void {
    setWindow(tabNumber);
    if (tabNumber == 2 && !units.fetched && !units.fetching) {
      fetchUnits({ params });
    } else if (tabNumber == 1 && !parameters.fetched && !parameters.fetching) {
      fetchParameters({ params });
    }
  }

  function handleChange(event): void {
    const {
      target: { value, name },
    } = event;
    setValues(prevState => ({ ...prevState, [name]: value }));
  }

  function handleObjectClicked(type: string) {
    //  TODO: This is where we ought to handle click events of the table rows
    //        The type here would be one of units | paramters | applianceCategory
    //        We are supposed to either move to another page or perform some other operation here
    //        You can log this to be sure
    return function(obj: Record<string, string>) {
      moveToNextPage({ nextPageRoute: `appliance-category/${obj.id}` });
    };
  }

  // TODO: The image here is supposed to the retrieved from organisation data in the store
  //       Also there should be a width transformation of the image as previously discussed

  function toggleModal(show: boolean): React.EventHandler<React.SyntheticEvent> {
    return function(e) {
      e.preventDefault();
      if (show) {
        setCurrentModal(currentWindow + 1);
      } else {
        setCurrentModal(0);
      }
    };
  }
  return (
    <div>
      <OrgPortalHeading>Settings</OrgPortalHeading>
      <SettingsPageLayout
        handleChange={handleChange}
        currentWindow={currentWindow}
        handleTabChange={handleTabChange}
        values={values}
        applianceCategories={applianceCategory.data}
        units={units.data}
        parameters={parameters.data}
        handleObjectClicked={handleObjectClicked}
        handleCreateBtnClicked={toggleModal(true)}
      />
      {!justCreated && currentModal === 1 && (
        <CreateCategory
          hideModal={toggleModal(false)}
          defaultValues={defaultCreateCategoryValues}
          handleSubmit={handleSubmit}
          apiErrors={createApplianceCategory.errors}
        />
      )}
      {!justCreated && currentModal === 2 && (
        <CreateParameter
          hideModal={toggleModal(false)}
          defaultValues={defaultCreateParameterValues}
          handleSubmit={handleSubmit}
          params={params}
        />
      )}
    </div>
  );
}

const mapStateToProps = ({
  setting: { justCreated, applianceCategory, parameters, units, createApplianceCategory },
}) => ({
  applianceCategory,
  parameters,
  units,
  createApplianceCategory,
  justCreated,
});

const mapDispatchToProps = dispatch => ({
  fetchParameters: (payload): void => dispatch(fetchParameters(payload)),
  fetchUnits: (payload): string => dispatch(fetchUnits(payload)),
  fetchApplianceCategory: (payload): void => dispatch(fetchApplianceCategory(payload)),
  callCreateApplianceCategory: (payload): void => dispatch(createApplianceCategory(payload)),
  moveToNextPage: (payload): void => dispatch(moveToNextPage(payload)),
  callCreateParameter: (payload): void => dispatch(createParameters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withOrganisationPortalContainer(Settings));
