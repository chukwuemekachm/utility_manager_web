import * as React from 'react';
import styled from '@emotion/styled';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import StickyContent from 'components/ui/StickyContent';
import __spacing from 'settings/__spacing';
import Heading from 'components/ui/Heading';
import Button from 'components/ui/Button';
import TableContentParser from 'components/ui/TableContentParser';
import FilterInput from 'components/ui/FilterInput';
import SearchInput from 'components/ui/SearchInput';
import AvatarWithInfo from 'components/ui/AvatarWithInfo';
import DropdownItem from 'components/ui/DropdownItem';
import ChooseColumnsModal from './ChooseColumnsModal';

const contentParserFn = obj => {
  const imgURL =
    'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80';
  return (
    <>
      <td align="right">{obj.name}</td>
      <td align="right">{obj.energyConsumed}</td>

      <td align="right">{obj.powerRating}</td>
      <td align="right">{obj.engineSpeed}</td>
      <td align="right">{obj.powerRating}</td>
      <td align="right">{obj.engineSpeed}</td>

      <td align="right">
        <AvatarWithInfo
          name="Chidiebere Oguejiofor"
          time="Jan-01-2019, 11:47"
          imgUrl={imgURL}
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
      <th align="right">Energy</th>
      <th align="right">Energy Consumed</th>
      <th align="right">Power Rating</th>
      <th align="right">Engine Speed</th>
      <th align="right">Energy Consumed</th>
      <th align="right">Energy Consumed</th>
      <th align="left">Logged By</th>
    </>
  );
};
export default function LogsLayout() {
  const [values, setValues] = React.useState({ applianceSearch: '', categorySearch: '', showColumns: false });

  const showModalHandler = showOrHide => {
    return e => {
      e.preventDefault();
      setValues(prevState => ({ ...prevState, showColumns: showOrHide }));
    };
  };

  const data = [
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
    { name: '22 J', energyConsumed: '20 J', powerRating: '2.5 KVA', engineSpeed: '21 Km/h' },
  ];

  return (
    <>
      {values.showColumns && (
        <ChooseColumnsModal
          hideModal={showModalHandler(false)}
          handleSave={e => console.log('Saving...')}
        ></ChooseColumnsModal>
      )}
      <OrgPortalHeading>Logs</OrgPortalHeading>
      <StickyContent>
        <div>
          <LogsLayout.ControlsWrapper>
            <LogsLayout.DropdownItem>
              <SearchInput
                iconLabel="md-search"
                name="category"
                title="Enter Category"
                errorFeedback={[]}
                handleChange={e => setValues({ ...values, categorySearch: e.target.value })}
                placeholder="Category Name"
                value={values.categorySearch}
                handleTextInputChange={() => console.log('Searching...')}
              >
                {({ handleClick }) => (
                  <DropdownItem value="1" onClick={handleClick}>
                    Sampel
                  </DropdownItem>
                )}
              </SearchInput>
            </LogsLayout.DropdownItem>
            <LogsLayout.DropdownItem>
              <SearchInput
                iconLabel="md-search"
                name="search"
                title="Select Appliance"
                errorFeedback={[]}
                handleChange={e => setValues({ ...values, applianceSearch: e.target.value })}
                placeholder="Search"
                value={values.applianceSearch}
                handleTextInputChange={() => console.log('Searching...')}
              >
                {({ handleClick }) => (
                  <DropdownItem value="1" onClick={handleClick}>
                    Sampel
                  </DropdownItem>
                )}
              </SearchInput>
            </LogsLayout.DropdownItem>
            <LogsLayout.NewItem>
              <div>
                <Button leftIcon="md-add" type="button" isLoading={false} disabled={false}>
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
                <FilterInput
                  onClick={showModalHandler(true)}
                  width="30%"
                  label="Select Columns"
                  iconProps={{
                    iconType: 'md-reorder',
                    size: 'LARGE',
                  }}
                ></FilterInput>
              </div>
            </div>
          </LogsLayout.HeaderWrapper>
        </div>
      </StickyContent>
      <LogsLayout.Sample>
        <TableContentParser top="36.5%" data={data} headerParser={headerParser}>
          {contentParserFn}
        </TableContentParser>
      </LogsLayout.Sample>
    </>
  );
}

LogsLayout.HeaderWrapper = styled.div`
  padding-bottom: 4%;
  display: flex;
  width: 100%;
  .reorder > div {
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  > div {
    flex: 1;
  }
`;
LogsLayout.Sample = styled.div`
  position: relative;
`;

LogsLayout.ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  > div {
    &:first-child {
      padding-left: 0;
    }
    display: flex;
    /* align-items: center; */
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
  /* padding: 1% 13%; */
  padding: 0;
  flex: 2;
  align-self: flex-end;
  /* display: flex;
    align-items: flex-end; */

  > div {
    width: 30%;
  }
`;
