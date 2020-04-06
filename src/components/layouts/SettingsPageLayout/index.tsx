import * as React from 'react';
import styled from '@emotion/styled';
import Tab, { TabItem } from 'components/ui/Tab';
import Input from '../../ui/Input';
import Button from 'components/ui/Button';
import Table, { TableCard, TableItem } from 'components/ui/Table';

interface TableContentParserProps {
  data: object[];
  colMapper: {
    flexValue: number;
    columnAttr: string;
    limit?: number;
  }[];
  type: string;
  onClick?: (type: string, obj: object) => void;
}

function TableContentParser(props: TableContentParserProps) {
  const { data, colMapper, onClick, type } = props;
  if (data.length === 0) {
    return (
      <Table>
        <TableCard>
          <TableItem textAlign="center">No Results was found</TableItem>
        </TableCard>
      </Table>
    );
  }
  function onClickHandler(type, obj): React.EventHandler<React.SyntheticEvent> {
    return function(e) {
      e.preventDefault();
      onClick && onClick(type, obj);
    };
  }

  function parseText(text: string, limit?: number) {
    if (limit && text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  }

  return (
    <Table>
      {data.map((obj, index) => (
        <TableCard key={index} onClick={onClickHandler(type, obj)}>
          {colMapper.map((colMap, index) => (
            <TableItem key={index} flexValue={colMap.flexValue}>
              {parseText(obj[colMap.columnAttr].toString(), colMap.limit)}
            </TableItem>
          ))}
        </TableCard>
      ))}
    </Table>
  );
}

interface SettingsLayoutProps {
  units?: Record<string, unknown>[];
  parameters?: Record<string, unknown>[];
  applianceCategories?: Record<string, unknown>[];
  children?: React.ReactNode;
  currentWindow: number;
  values: {
    search: string;
    tabSelected: number;
  };
  handleTabChange;
  handleChange: React.EventHandler<React.SyntheticEvent>;
  handleObjectClicked: (type: string, obj: object) => void;
  handleCreateBtnClicked: React.EventHandler<React.SyntheticEvent>;
}

export default function SettingsPageLayout(props: SettingsLayoutProps) {
  const {
    units = [],
    parameters = [],
    applianceCategories = [],
    currentWindow,
    values,
    handleTabChange,
    handleChange,
    handleObjectClicked,
    handleCreateBtnClicked,
  } = props;

  const categoryColMapper = [
    {
      flexValue: 2,
      columnAttr: 'name',
    },
    {
      flexValue: 10,
      columnAttr: 'description',
      limit: 80,
    },
  ];

  const parameterColMapper = [
    {
      flexValue: 2,
      columnAttr: 'name',
    },
    {
      flexValue: 10,
      columnAttr: 'valueType',
    },
  ];

  const unitsColMapper = [
    {
      flexValue: 2,
      columnAttr: 'letterSymbol',
      limit: 80,
    },
    {
      flexValue: 10,
      columnAttr: 'name',
    },
  ];
  return (
    <SettingsPageLayout.Wrapper>
      <SettingsPageLayout.ControlsWrapper>
        <SettingsPageLayout.Tabs>
          <Tab onTabChange={handleTabChange}>
            {({ setTab, tab }): React.ReactNode => (
              <>
                <TabItem itemValue={0} currentValue={tab} setTab={setTab}>
                  Appliance Category
                </TabItem>
                <TabItem itemValue={1} currentValue={tab} setTab={setTab}>
                  Parameters
                </TabItem>
                <TabItem itemValue={2} currentValue={tab} setTab={setTab}>
                  Units
                </TabItem>
              </>
            )}
          </Tab>
        </SettingsPageLayout.Tabs>

        <SettingsPageLayout.Search>
          <Input
            iconLabel="md-search"
            type="text"
            name="search"
            title=""
            value={values.search}
            errorFeedback={[]}
            handleChange={handleChange}
            placeholder="Search"
          />
        </SettingsPageLayout.Search>

        <SettingsPageLayout.NewItem>
          <Button type="button" isLoading={false} disabled={false} handleClick={handleCreateBtnClicked}>
            Create New
          </Button>
        </SettingsPageLayout.NewItem>
      </SettingsPageLayout.ControlsWrapper>
      <div>
        {currentWindow == 0 ? (
          <TableContentParser
            data={applianceCategories}
            colMapper={categoryColMapper}
            onClick={handleObjectClicked}
            type="applianceCategory"
          />
        ) : currentWindow == 1 ? (
          <TableContentParser type="parameters" data={parameters} colMapper={parameterColMapper} />
        ) : (
          <TableContentParser type="units" data={units} colMapper={unitsColMapper} />
        )}
      </div>
    </SettingsPageLayout.Wrapper>
  );
}

SettingsPageLayout.Search = styled.div`
  flex: 4;
  padding: 0;
  width: 100%;
`;

SettingsPageLayout.ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  > div {
    padding: 0 2%;
    &:first-child {
      padding-left: 0;
    }
  }
`;

SettingsPageLayout.NewItem = styled.div`
  flex: 2;
`;
SettingsPageLayout.Tabs = styled.div`
  flex: 8;
  padding-left: 0;
`;

SettingsPageLayout.Wrapper = styled.div``;
