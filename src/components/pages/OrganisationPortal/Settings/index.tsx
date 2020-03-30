import * as React from 'react';
import SettingsPageLayout from 'components/layouts/SettingsPageLayout';
import NavigationLayout from 'components/layouts/NavigationLayout';
import { connect } from 'react-redux';
import { fetchApplianceCategory, fetchParameters, fetchUnits } from 'store/actions/setting';
import { SettingObjectType } from 'store/reducers/setting';

interface SettingsProps {
  applianceCategory: SettingObjectType;
  fetchApplianceCategory: Function;
  fetchUnits: Function;
  fetchParameters: Function;
  parameters: SettingObjectType;
  units: SettingObjectType;
  match: {
    params: {
      orgId: string;
    };
  };
}
function Settings(props: SettingsProps) {
  const {
    applianceCategory,
    fetchApplianceCategory,
    fetchUnits,
    fetchParameters,
    parameters,
    units,
    match: { params },
  } = props;
  React.useEffect(function(): void {
    fetchApplianceCategory({ params });
  }, []);
  const defaultValues = {
    search: '',
    tabSelected: 0,
  };
  const [values, setValues] = React.useState(defaultValues);
  const [currentWindow, setWindow] = React.useState(0);

  function handleTabChange(tabNumber: number) {
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

  function handleObjectClicked(type: string, obj: object) {
    //  TODO: This is where we ought to handle click events of the table rows
    //        The type here would be one of units | paramters | applianceCategory
    //        We are supposed to either move to another page or perform some other operation here
    console.log(type);
    console.log(obj);
  }

  // TODO: The image here is supposed to the retrieved from organisation data in the store
  //       Also there should be a width transformation of the image as previously discussed
  const sampleImage =
    'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80';

  return (
    <NavigationLayout title="Settings" imgUrl={sampleImage} currentDisplay={3}>
      <SettingsPageLayout
        handleChange={handleChange}
        currentWindow={currentWindow}
        handleTabChange={handleTabChange}
        values={values}
        applianceCategories={applianceCategory.data}
        units={units.data}
        parameters={parameters.data}
        handleObjectClicked={handleObjectClicked}
      />
    </NavigationLayout>
  );
}

const mapStateToProps = ({ setting: { applianceCategory, parameters, units } }) => ({
  applianceCategory,
  parameters,
  units,
});

const mapDispatchToProps = dispatch => ({
  fetchParameters: (payload): void => dispatch(fetchParameters(payload)),
  fetchUnits: (payload): string => dispatch(fetchUnits(payload)),
  fetchApplianceCategory: (payload): void => dispatch(fetchApplianceCategory(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
