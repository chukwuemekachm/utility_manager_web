import * as React from 'react';
import styled from '@emotion/styled';
import Tab, { TabItem } from 'components/ui/Tab';
import Input from '../../ui/Input';
import Button from 'components/ui/Button';
import TableContentParser from 'components/ui/TableContentParser';
import { TableItem } from '../../ui/Table';
import { parseText } from 'helpers';

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
  handleObjectClicked: (type: string) => (obj: Record<string, any>) => void;
  handleCreateBtnClicked: React.EventHandler<React.SyntheticEvent>;
}

function objectToComponent(type: string) {
  return function Component(obj): React.ReactNode {
    switch (type.toUpperCase()) {
      case 'CATEGORY':
        return (
          <>
            <TableItem flexValue={2}>{obj.name}</TableItem>
            <TableItem flexValue={10}>{parseText(obj.description, 80)}</TableItem>
          </>
        );
      case 'PARAMETER':
        return (
          <>
            <TableItem flexValue={2}>{obj.name}</TableItem>
            <TableItem flexValue={10}>{obj.valueType}</TableItem>
          </>
        );
      case 'UNIT':
        return (
          <>
            <TableItem flexValue={2}>{obj.letterSymbol}</TableItem>
            <TableItem flexValue={10}>{parseText(obj.name, 80)}</TableItem>
          </>
        );
      default:
        return <div></div>;
    }
  };
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
          <TableContentParser data={applianceCategories} onClick={handleObjectClicked('CATEGORY')}>
            {objectToComponent('CATEGORY')}
          </TableContentParser>
        ) : currentWindow == 1 ? (
          <TableContentParser data={parameters}>{objectToComponent('PARAMETER')}</TableContentParser>
        ) : (
          <TableContentParser data={units}>{objectToComponent('UNIT')}</TableContentParser>
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
