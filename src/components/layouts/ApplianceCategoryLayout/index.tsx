import * as React from 'react';
import styled from '@emotion/styled';
import TableContentParser from 'components/ui/TableContentParser';
import Input from '../../ui/Input';
import Button from 'components/ui/Button';
import ReadMore from '../../ui/ReadMore';
import { BRAND_PRIMARY } from '../../../settings/__color';
import { fontSizes } from '../../../settings/__fonts';
import { TableItem } from '../../ui/Table';
import { parseText } from '../../../helpers';

interface CategoryLayoutProps {
  appliances?: Record<string, unknown>[];
  applianceCategory: Record<string, string>;
  values: {
    search: string;
  };
  handleChange: React.EventHandler<React.SyntheticEvent>;
  handleObjectClicked?: (type: string, obj: object) => void; //should be compulsory later
  handleCreateBtnClicked: React.EventHandler<React.SyntheticEvent>;
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
  const sampleAppliances = [{ label: 'KTA 50 101' }, { label: 'KTA 70 101' }];
  const {
    appliances = sampleAppliances,
    values,
    handleChange,
    applianceCategory,
    handleObjectClicked,
    handleCreateBtnClicked,
  } = props;

  const caption = {
    0: 'Show full description',
    1: 'Show less',
  };

  return (
    <ApplianceCategoryPageLayout.Wrapper>
      <ReadMore caption={caption}>{applianceCategory.description}</ReadMore>

      <ApplianceCategoryPageLayout.ControlsWrapper>
        <ApplianceCategoryPageLayout.Heading>Appliances</ApplianceCategoryPageLayout.Heading>
        <ApplianceCategoryPageLayout.Search>
          <Input
            iconLabel="md-search"
            type="text"
            name="search"
            title=""
            errorFeedback={[]}
            handleChange={handleChange}
            placeholder="Search"
            value={values.search}
          />
        </ApplianceCategoryPageLayout.Search>

        <ApplianceCategoryPageLayout.NewItem>
          <Button type="button" isLoading={false} disabled={false} handleClick={handleCreateBtnClicked}>
            Create New
          </Button>
        </ApplianceCategoryPageLayout.NewItem>
      </ApplianceCategoryPageLayout.ControlsWrapper>
      <div>
        <TableContentParser data={appliances}>{getApplianceItem}</TableContentParser>
      </div>
    </ApplianceCategoryPageLayout.Wrapper>
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
  margin-top: 4%;
  flex: space-between;
`;

ApplianceCategoryPageLayout.NewItem = styled.div`
  flex: 2;
`;

ApplianceCategoryPageLayout.Heading = styled.h2`
  color: ${BRAND_PRIMARY};
  font-size: ${fontSizes.medium};
  flex: 7;
`;

ApplianceCategoryPageLayout.Wrapper = styled.div``;
