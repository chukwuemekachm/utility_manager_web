import * as React from 'react';
import styled from '@emotion/styled';
import Tab, { TabItem } from 'components/ui/Tab';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import TableContentParser from 'components/ui/TableContentParser';
import { TableItem } from 'components/ui/Table';
import { parseText } from 'helpers';
import { SettingObjectType } from 'store/reducers/setting';
import InfiniteScroll from 'components/ui/InfiniteScroll';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import StickyContent from 'components/ui/StickyContent';

interface SettingsLayoutProps {
  settingsObjects: SettingObjectType;
  type: 'CATEGORY' | 'UNIT' | 'PARAMETER';
  children?: React.ReactNode;
  params: Record<string, any>;
  currentWindow: number;
  values: {
    search: string;
    tabSelected: number;
  };
  fetchData: (payload) => void;
  handleTabChange: Function;
  handleChange: React.EventHandler<React.SyntheticEvent>;
  handleObjectClicked: (type: string) => ((obj: Record<string, string>) => void) | null;
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
    settingsObjects,
    values,
    handleTabChange,
    handleChange,
    handleObjectClicked,
    handleCreateBtnClicked,
    fetchData,
    params,
    type,
  } = props;
  const onTableItemClick = handleObjectClicked(type) || undefined;

  return (
    <>
      <StickyContent>
        <OrgPortalHeading>Settings</OrgPortalHeading>
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
      </StickyContent>
      <div>
        <InfiniteScroll params={params} retrievedData={settingsObjects} fetchData={fetchData}>
          {({ lastItemRef, data }) => (
            <TableContentParser lastRef={lastItemRef} data={data} onClick={onTableItemClick}>
              {objectToComponent(type)}
            </TableContentParser>
          )}
        </InfiniteScroll>
        {}
      </div>
    </>
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
