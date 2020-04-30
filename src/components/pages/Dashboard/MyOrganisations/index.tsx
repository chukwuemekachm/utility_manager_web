import * as React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import OrganisationCard from 'components/ui/OrganisationCard';
import { fetchCurrentUserOrganisations } from 'store/actions/dashboard';
import { getDateJoinedMessage } from 'helpers/dateHelpers';
import { transformCloudinaryURL } from 'utils/misc';
import { ImageOptions } from 'utils/constants';
import { moveToNextPage } from 'store/actions/navigation';

interface MyOrganisationsProps {
  img: string;
  name: string;
  role: { name: string };
  date: string;
  userOrgs: FetchDataType;
  fetchCurrentUserOrganisations: () => void;
  moveToNextPage: Function;
}

export function MyOrganisations(props: MyOrganisationsProps): React.ReactElement<MyOrganisationsProps> {
  const { fetchCurrentUserOrganisations, userOrgs, moveToNextPage } = props;

  React.useEffect(function(): void {
    if (!userOrgs.fetched && !userOrgs.fetching) {
      fetchCurrentUserOrganisations();
    }
  }, []);

  function navigateToPortal(orgId: string) {
    return function() {
      moveToNextPage(`/organisation/${orgId}/charts`);
    };
  }
  if (userOrgs.fetching) return <MyOrganisations.Message>...Loading</MyOrganisations.Message>;

  return (
    <MyOrganisations.Wrapper>
      {!userOrgs.fetching && userOrgs.data.length ? (
        <>
          {userOrgs.data.map(org => (
            <MyOrganisations.OrgItem key={org.organisation.id} onClick={navigateToPortal(org.organisation.id)}>
              <OrganisationCard
                img={transformCloudinaryURL(org.organisation.logoUrl, [ImageOptions.AVATAR])}
                name={org.organisation.name}
                role={org.role.name}
                date={getDateJoinedMessage(org.organisation.createdAt)}
              />
            </MyOrganisations.OrgItem>
          ))}
        </>
      ) : (
        <MyOrganisations.Message>Sorry! you do not belong to any organisation yet</MyOrganisations.Message>
      )}
    </MyOrganisations.Wrapper>
  );
}

const mapStateToProps = ({ dashboard: { userOrgs } }): Pick<MyOrganisationsProps, 'userOrgs'> => ({
  userOrgs: userOrgs,
});

const mapDispatchToProps = (
  dispatch,
): Pick<MyOrganisationsProps, 'fetchCurrentUserOrganisations' | 'moveToNextPage'> => ({
  fetchCurrentUserOrganisations: (): void => dispatch(fetchCurrentUserOrganisations()),
  moveToNextPage: (nextPageRoute): void => dispatch(moveToNextPage({ nextPageRoute })),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyOrganisations);

MyOrganisations.Wrapper = styled.section`
  padding: 0;
`;

MyOrganisations.OrgItem = styled.section`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

MyOrganisations.Message = styled.p``;
