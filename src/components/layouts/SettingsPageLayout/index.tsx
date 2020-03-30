import * as React from 'react';
import styled from '@emotion/styled';
import Tab, { TabItem } from 'components/ui/Tab';
import Input, { InputType } from '../../ui/Input';
import { action } from '@storybook/addon-actions';
import Button, { ButtonType } from 'components/ui/Button';
import Table, { TableCard, TableItem } from 'components/ui/Table';
const { useState } = React;

interface ContentProps {
  data: string[][];
  colFlexMap: object;
}

interface SettingsLayoutProps {
  units?: string[][];
  parameters?: string[][];
  applianceCategories?: string[][];
  children?: React.ReactNode;
}
function Content(props: ContentProps) {
  const { data, colFlexMap } = props;
  if (data.length === 0) {
    return (
      <Table>
        <TableCard>
          <TableItem textAlign="center">No Results was found</TableItem>
        </TableCard>
      </Table>
    );
  }
  return (
    <Table>
      {data.map((row, index) => (
        <TableCard key={index}>
          {row.map((value, index) => (
            <TableItem key={index} flexValue={colFlexMap[index]}>
              {value}
            </TableItem>
          ))}
        </TableCard>
      ))}
    </Table>
  );
}
export default function SettingsPageLayout(props: SettingsLayoutProps) {
  const { units = [], parameters = [], applianceCategories = [] } = props;
  const [currentWindow, setWindow] = React.useState(0);
  function handleTabChange(tabNumber: number) {
    setWindow(tabNumber);
    console.log(currentWindow);
  }

  const colMapper = {
    0: 2,
    1: 10,
  };
  return (
    <SettingsPageLayout.Wrapper>
      <h1>Settings</h1>
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

        <SettingsPageLayout.ControlsWrapper>
          <Input
            iconLabel="md-search"
            type="text"
            name="search"
            title=""
            value=""
            errorFeedback={[]}
            handleChange={action('Clicked')}
            handleBlur={action('Blur Handler!!')}
            placeholder="Search"
          />
        </SettingsPageLayout.ControlsWrapper>
        <SettingsPageLayout.NewItem>
          <Button type="button" isLoading={false} disabled={false} handleClick={action('clicked')}>
            Create New
          </Button>
        </SettingsPageLayout.NewItem>
      </SettingsPageLayout.ControlsWrapper>
      <div>
        {currentWindow == 0 ? (
          <Content data={applianceCategories} colFlexMap={colMapper} />
        ) : currentWindow == 1 ? (
          <Content data={parameters} colFlexMap={colMapper} />
        ) : (
          <Content data={units} colFlexMap={colMapper} />
        )}
      </div>
    </SettingsPageLayout.Wrapper>
  );
}

SettingsPageLayout.ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  > div {
    padding: 0 2%;
  }
`;

SettingsPageLayout.NewItem = styled.div`
  flex: 2;
`;
SettingsPageLayout.Tabs = styled.div`
  flex: 10;
  padding-left: 0;
`;

SettingsPageLayout.Wrapper = styled.div`
  padding: 0 3%;
  h1 {
    font-family: Fira Sans;
    font-style: normal;
    font-size: 24px;
    font-weight: 500;
  }
`;
