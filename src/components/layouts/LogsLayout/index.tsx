import * as React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import StickyContent from 'components/ui/StickyContent';
import __spacing from 'settings/__spacing';
import Heading from 'components/ui/Heading';
import Button from 'components/ui/Button';
import TableContentParser from 'components/ui/TableContentParser';
import SearchInput from 'components/ui/SearchInput';
import AvatarWithInfo from 'components/ui/AvatarWithInfo';
import DropdownItem, { DropdownGroup } from 'components/ui/DropdownItem';
import ChooseColumnsModal, { ColumnType } from './ChooseColumnsModal';
import { transformCloudinaryURL } from 'utils/misc';
import { ImageOptions, MAX_COLUMNS_IN_TABLE } from 'utils/constants';
import { WHITE_SMOKE, DARK_GRAY } from 'settings/__color';

interface LogsLayoutProps {
  onSearchAppliance: (e) => void;
  onApplianceChange: (e) => void;
  appliances: FetchDataType;
  parameters: FetchDataType;
  logs: FetchDataType;
}
export default function LogsLayout(props: LogsLayoutProps) {
  const { onSearchAppliance, onApplianceChange, appliances, parameters, logs } = props;

  const [values, setValues] = React.useState({ applianceSearch: '', categorySearch: '', showColumns: false });
  interface ParamColumnType extends ColumnType {
    name: string;
    id: string;
    valueType: string;
    unit?: {
      symbol: string;
    };
  }
  type ColumnObjType = {
    selected: Extract<any, ParamColumnType>[];
    unselected: Extract<any, ParamColumnType>[];
  };
  const [columns, setColumns] = React.useState<ColumnObjType>({
    selected: [],
    unselected: [],
  });
  React.useEffect(() => {
    if (parameters.fetched) {
      const initialUnselectedColumns = parameters.data.slice(MAX_COLUMNS_IN_TABLE).map(param => ({
        ...param,
        children: param.name,
        value: param.id,
        checked: false,
      }));
      const initialSelectedColumns = parameters.data.slice(0, MAX_COLUMNS_IN_TABLE).map(paramter => ({
        ...paramter,
        children: paramter.name,
        value: paramter.id,
        checked: false,
      }));

      setColumns({
        selected: initialSelectedColumns,
        unselected: initialUnselectedColumns,
      });
    }
  }, [parameters.data]);

  const showModalHandler = showOrHide => {
    return e => {
      e.preventDefault();
      setValues(prevState => ({ ...prevState, showColumns: showOrHide }));
    };
  };

  const contentParserFn = log => {
    const fullName = log.createdBy.firstName + ' ' + log.createdBy.lastName;
    let fromNow;
    if (log.updatedAt) {
      fromNow = moment(log.updatedAt).fromNow();
    } else {
      fromNow = moment(log.createdAt).fromNow();
    }

    return (
      <>
        {columns.selected.map((parameter, index) => (
          <td key={index} align={parameter.valueType === 'TEXT' ? 'left' : 'right'}>
            {log.logValues[parameter.id]} {(parameter.unit && parameter.unit.symbol) || ''}
          </td>
        ))}

        <td align="right">
          <AvatarWithInfo
            name={fullName}
            time={fromNow}
            imgUrl={transformCloudinaryURL(log.createdBy.imageURL, [ImageOptions.AVATAR])}
            size="NORMAL"
            altText="created_by_url"
          />
        </td>
      </>
    );
  };

  const headerParser = () => {
    return (
      <>
        {columns.selected.map((parameter, index) => (
          <th key={index} align={parameter.valueType === 'TEXT' ? 'left' : 'right'}>
            {parameter.name}
          </th>
        ))}
        <th align="left">Logged By</th>
      </>
    );
  };
  const categoryOrder: string[] = [];
  const searchData: Record<string, any[]> = {};

  for (let index = 0; index < appliances.data.length; index++) {
    const appliance = appliances.data[index];
    const categoryName = appliance.category.name;
    if (!searchData[categoryName]) {
      searchData[categoryName] = [];
      categoryOrder.push(categoryName);
    }
    searchData[categoryName].push(appliance);
  }

  const handleSaveColumns = columns => {
    const uniqueParamsIds = new Set(columns.map(param => param.id));
    const unselected = parameters.data
      .filter(param => !uniqueParamsIds.has(param.id))
      .map(param => ({
        ...param,
        children: param.name,
        value: param.id,
        checked: false,
      }));
    setColumns({
      selected: columns,
      unselected: unselected,
    });

    setValues(prevState => ({ ...prevState, showColumns: false }));
  };

  const filterColumns = currentValue => column => {
    return column.name.toLowerCase().includes(currentValue.toLowerCase());
  };

  const disableCustomizeColumns = logs.data.length <= 0;
  return (
    <>
      {values.showColumns && (
        <ChooseColumnsModal
          filterColumns={filterColumns}
          initalDragAndDropValues={columns.selected}
          initialColumns={columns.unselected}
          hideModal={showModalHandler(false)}
          handleSave={handleSaveColumns}
        ></ChooseColumnsModal>
      )}
      <OrgPortalHeading>Logs</OrgPortalHeading>
      <StickyContent>
        <div>
          <LogsLayout.ControlsWrapper>
            <LogsLayout.DropdownItem>
              <SearchInput
                iconLabel="md-search"
                name="search"
                title="Select Appliance"
                errorFeedback={[]}
                handleChange={onApplianceChange}
                placeholder="Search Appliance"
                value={values.applianceSearch}
                handleTextInputChange={onSearchAppliance}
              >
                {({ handleClick }) => (
                  <>
                    {categoryOrder.map((categoryName, index) => (
                      <React.Fragment key={categoryName}>
                        <DropdownGroup label={categoryName} />
                        {searchData[categoryName].map(appliance => (
                          <React.Fragment key={appliance.id}>
                            <DropdownItem value={appliance.id} onClick={handleClick}>
                              {appliance.label}
                            </DropdownItem>
                          </React.Fragment>
                        ))}
                      </React.Fragment>
                    ))}
                  </>
                )}
              </SearchInput>
            </LogsLayout.DropdownItem>
            <LogsLayout.NewItem>
              <div>
                <Button inverted leftIcon="md-download" type="button" isLoading={false} disabled={false}>
                  Export Log
                </Button>
              </div>
              <div>
                <Button
                  leftIconColor="WHITE"
                  leftIcon="md-add"
                  type="button"
                  isLoading={false}
                  disabled={disableCustomizeColumns}
                >
                  Add New Log
                </Button>
              </div>
            </LogsLayout.NewItem>
          </LogsLayout.ControlsWrapper>

          <LogsLayout.HeaderWrapper>
            <div>
              <Heading type="h2" color="BRAND_PRIMARY" size="medium" css="flex: 7;">
                Pump Logs
              </Heading>
            </div>

            <div className="reorder">
              <div>
                <Button
                  handleClick={showModalHandler(true)}
                  inverted
                  leftIconColor={DARK_GRAY}
                  leftIcon="md-reorder"
                  type="button"
                  isLoading={false}
                  disabled={disableCustomizeColumns}
                >
                  Select Columns
                </Button>
              </div>
            </div>
          </LogsLayout.HeaderWrapper>
        </div>
      </StickyContent>
      <LogsLayout.Sample>
        {!parameters.data.length || !logs.data.length ? (
          <div className="no-logs">
            No Logs available {parameters.data.length ? 'for the selected appliance' : '. Plese select an appliance'}
          </div>
        ) : (
          <TableContentParser
            top="36.5%"
            data={columns.selected.length > 0 ? logs.data : []}
            headerParser={headerParser}
          >
            {contentParserFn}
          </TableContentParser>
        )}
      </LogsLayout.Sample>
    </>
  );
}

LogsLayout.HeaderWrapper = styled.div`
  padding-bottom: 4%;
  display: flex;
  align-items: center;

  width: 100%;
  .reorder > div {
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > div {
      width: 25%;
    }
  }

  > div {
    flex: 1;
  }
`;
LogsLayout.Sample = styled.div`
  position: relative;
  .no-logs {
    background-color: ${WHITE_SMOKE};
    font-weight: bold;
    text-align: center;
    padding: 1em;
  }
`;

LogsLayout.ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  > div {
    &:first-child {
      padding-left: 0;
    }
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }
  margin-top: ${__spacing.xLarge};
  margin-bottom: 3%;
`;

LogsLayout.DropdownItem = styled.div`
  flex: 1;
  padding: 0;
  width: 100%;
  height: 3.125em;
  align-self: flex-end;
`;
LogsLayout.NewItem = styled.div`
  padding: 0;
  flex: 2;
  align-self: flex-end;
  > div {
    width: 20%;
    margin-left: 3%;
  }
`;
