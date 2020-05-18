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
  resetSettingsStatus,
} from 'store/actions/setting';
import { OrgPortalProps } from '../index';
import withOrganisationPortalContainer from 'components/containers/OrganisationPortalContainer';
import { moveToNextPage } from 'store/actions/navigation';
import CreateParameter from './CreateParameter';
import { useSearchDebounce } from 'helpers/customHooks';

interface SettingsProps extends OrgPortalProps {
  applianceCategory: FetchDataType;
  fetchApplianceCategory: (payload) => void;
  fetchUnits: (payload) => void;
  fetchParameters: (payload) => void;
  parameters: FetchDataType;
  searchedUnits: FetchDataType;
  units: FetchDataType;
  createApplianceCategory: CreateObjectType;
  createParameter: CreateObjectType;
  justCreated: boolean;
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
  resetStatus: () => void;
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
    createParameter,
    justCreated,
    handleSubmit,
    moveToNextPage,
    resetStatus,
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
  const params = { ...props.match.params, searchValue: '' };
  const [values, setValues] = React.useState(defaultValues);
  const [currentModal, setCurrentModal] = React.useState(0);
  const [currentWindow, setWindow] = React.useState(0);
  const [displayActionIndex, setDisplayActionIndex] = React.useState();
  const displayMoreActionRef = React.useRef(null);

  let data, type: string, fetchData;
  type = '';
  fetchData = applianceCategory;

  if (currentWindow === 0) {
    data = applianceCategory;
    type = 'CATEGORY';
    fetchData = fetchApplianceCategory;
  } else if (currentWindow === 1) {
    data = parameters;
    type = 'PARAMETER';
    fetchData = fetchParameters;
  } else if (currentWindow === 2) {
    data = units;
    type = 'UNIT';
    fetchData = fetchUnits;
  }
  const [searchValue] = useSearchDebounce(fetchData, params);

  React.useEffect(
    function() {
      function handleBur() {
        if (typeof displayActionIndex === 'number') {
          setDisplayActionIndex(null);
        }
      }
      resetStatus();
      fetchApplianceCategory({ params });
      window.addEventListener('click', handleBur);
      return function(): void {
        window.removeEventListener('click', handleBur);
      };
    },
    [displayActionIndex],
  );
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
    searchValue(value);
  }

  function handleObjectClicked(type: string) {
    if (type === 'CATEGORY') {
      return function(obj: Record<string, string>) {
        moveToNextPage({ nextPageRoute: `appliance-category/${obj.id}` });
      };
    }

    return null;
  }
  /**
   * Handles display more action
   * @param rowIndex
   * @returns null
   */
  function handleDisplayMoreAction(rowIndex): null {
    console.log('moreAction', rowIndex);
    setDisplayActionIndex(rowIndex);
    return null;
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
      <SettingsPageLayout
        handleChange={handleChange}
        currentWindow={currentWindow}
        handleTabChange={handleTabChange}
        values={values}
        settingsObjects={data}
        type={type}
        handleObjectClicked={handleObjectClicked}
        handleCreateBtnClicked={toggleModal(true)}
        displayMoreActionHandler={handleDisplayMoreAction}
        actionIndex={displayActionIndex}
        inViewRef={displayMoreActionRef}
        params={{
          ...params,
          searchValue: values.search,
        }}
        fetchData={fetchData}
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
          apiErrors={createParameter.errors}
        />
      )}
    </div>
  );
}

const mapStateToProps = ({
  setting: { justCreated, applianceCategory, parameters, units, createApplianceCategory, createParameter },
}) => ({
  applianceCategory,
  parameters,
  units,
  createApplianceCategory,
  createParameter,
  justCreated,
});

const mapDispatchToProps = dispatch => ({
  fetchParameters: (payload): void => dispatch(fetchParameters(payload)),
  fetchUnits: (payload): string => dispatch(fetchUnits(payload)),
  fetchApplianceCategory: (payload): void => dispatch(fetchApplianceCategory(payload)),
  callCreateApplianceCategory: (payload): void => dispatch(createApplianceCategory(payload)),
  moveToNextPage: (payload): void => dispatch(moveToNextPage(payload)),
  callCreateParameter: (payload): void => dispatch(createParameters(payload)),
  resetStatus: (payload): void => dispatch(resetSettingsStatus(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withOrganisationPortalContainer(Settings));
