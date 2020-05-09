import * as React from 'react';
import styled from '@emotion/styled';
import TableContentParser from 'components/ui/TableContentParser';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import ReadMore from 'components/ui/ReadMore';
import Heading from 'components/ui/Heading';
import { TableItem } from 'components/ui/Table';
import __spacing from 'settings/__spacing';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import StickyContent from 'components/ui/StickyContent';
import InfiniteScroll from 'components/ui/InfiniteScroll';

interface CategoryLayoutProps {
  appliances: FetchDataType;
  applianceCategory: Record<string, string>;
  values: {
    search: string;
  };
  handleSearchAppliance: React.EventHandler<React.SyntheticEvent>;
  handleObjectClicked?: (type: string, obj: object) => void; //should be compulsory later
  handleCreateBtnClicked: React.EventHandler<React.SyntheticEvent>;
  fetchData: (payload: any) => void;
  params: Record<string, any>;
}

function getApplianceItem(appliance) {
  return (
    <>
      <TableItem flexValue={2}>{appliance.label}</TableItem>
      <TableItem flexValue={10}>{appliance.description}</TableItem>
    </>
  );
}
export default function ApplianceCategoryPageLayout(props: CategoryLayoutProps) {
  const {
    appliances,
    handleSearchAppliance,
    values,
    applianceCategory,
    handleObjectClicked,
    fetchData,
    handleCreateBtnClicked,
    params,
  } = props;

  const caption = {
    0: 'Show full description',
    1: 'Show less',
  };
  const lengthLimit = applianceCategory.description.split(' ').length;
  return (
    <>
      <StickyContent>
        <OrgPortalHeading>{applianceCategory.name}</OrgPortalHeading>
        <ReadMore showDisplay={lengthLimit > 70} caption={caption}>
          {applianceCategory.description}
        </ReadMore>

        <ApplianceCategoryPageLayout.ControlsWrapper>
          <Heading type="h2" css="flex: 7;" color="BRAND_PRIMARY" size="medium">
            Appliances
          </Heading>
          <ApplianceCategoryPageLayout.Search>
            <Input
              iconLabel="md-search"
              type="text"
              name="search"
              title=""
              errorFeedback={[]}
              handleChange={handleSearchAppliance}
              placeholder="Search"
              value={values.search}
            />
          </ApplianceCategoryPageLayout.Search>

          <ApplianceCategoryPageLayout.NewItem>
            <Button type="button" isLoading={false} disabled={false} handleClick={handleCreateBtnClicked}>
              Add Appliance
            </Button>
          </ApplianceCategoryPageLayout.NewItem>
        </ApplianceCategoryPageLayout.ControlsWrapper>
      </StickyContent>
      <div>
        <InfiniteScroll params={params} retrievedData={appliances} fetchData={fetchData}>
          {({ lastItemRef, data }) => (
            <TableContentParser lastRef={lastItemRef} data={data}>
              {getApplianceItem}
            </TableContentParser>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
}

ApplianceCategoryPageLayout.Search = styled.div`
  flex: 4;
  padding: 0;
  width: 100%;
`;

ApplianceCategoryPageLayout.ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  > div {
    padding: 0 2%;
    &:first-child {
      padding-left: 0;
    }
  }
  margin-top: ${__spacing.xLarge};
  flex: space-between;
`;

ApplianceCategoryPageLayout.NewItem = styled.div`
  flex: 2;
`;
