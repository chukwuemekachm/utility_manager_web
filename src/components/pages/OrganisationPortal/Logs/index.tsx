import * as React from 'react';
import { OrgPortalProps } from '../index';
import { connect } from 'react-redux';
import LogLayout from 'components/layouts/LogsLayout';
import withOrganisationPortalContainer from 'components/containers/OrganisationPortalContainer';
import { fetchAppliances, fetchParameters, resetSettingsStatus } from 'store/actions/setting';

import { fetchLogs } from 'store/actions/logs';
import { useSearchDebounce } from 'helpers/customHooks';

interface LoggingPageProps extends OrgPortalProps {
  fetchAppliances: (payload) => void;
  fetchLogs: (payload) => void;
  resetStatus: (payload) => void;
  fetchParameters: (payload) => void;
  appliances: FetchDataType;
  logs: FetchDataType;
  parameters: FetchDataType;
}

export function LoggingPage(props: LoggingPageProps) {
  const {
    fetchAppliances,
    fetchParameters,
    fetchLogs,
    parameters,
    appliances,
    logs,
    resetStatus,
    match: { params },
  } = props;
  React.useEffect(function(): void {
    resetStatus({ clearParams: true });
  }, []);
  const fetchParams = {
    ...params,
    searchKeys: ['category_name', 'label'],
  };
  const [searchAppliances] = useSearchDebounce(fetchAppliances, fetchParams);

  const handleSearchAppliance = e => {
    searchAppliances(e.target.value);
  };

  const hanleApplianceChange = e => {
    if (e.target.value) {
      fetchParameters({
        params: {
          ...params,
          searchValue: e.target.value,
          searchKeys: ['appliance_id'],
          pageLimit: 1000,
        },
      });
      fetchLogs({
        params: {
          ...params,
          searchValue: e.target.value,
        },
      });
    }
  };
  return (
    <div>
      <LogLayout
        onSearchAppliance={handleSearchAppliance}
        onApplianceChange={hanleApplianceChange}
        appliances={appliances}
        parameters={parameters}
        logs={logs}
      />
    </div>
  );
}

const mapStateToProps = ({ setting: { appliances, parameters }, logs: { logs } }) => ({
  appliances,
  logs,
  parameters,
});

const mapDispatchToProps = dispatch => ({
  fetchAppliances: (payload): void => dispatch(fetchAppliances(payload)),
  fetchLogs: (payload): void => dispatch(fetchLogs(payload)),
  fetchParameters: (payload): void => dispatch(fetchParameters(payload)),
  resetStatus: (payload): void => dispatch(resetSettingsStatus(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withOrganisationPortalContainer(LoggingPage));
