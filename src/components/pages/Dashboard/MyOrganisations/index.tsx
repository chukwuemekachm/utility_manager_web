import * as React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import OrganisationCard from 'components/ui/OrganisationCard';
import { fetchCurrentUserOrganisations } from 'store/actions/dashboard';
import { getDateJoinedMessage } from 'helpers/dateHelpers';
import { transformCloudinaryURL } from 'utils/misc';
import { ImageOptions } from 'utils/constants';
import { moveToNextPage } from 'store/actions/navigation';

interface OrganisationProps {
  id: string;
  organisation: {
    id: string;
    createdAt: string;
    name: string;
    logoUrl: string;
  };
  role: {
    name: string;
  };
}

interface MyOrganisationsProps {
  img: string;
  name: string;
  role: { name: string };
  date: string;
  isOrganisationPending: boolean;
  isOrganizationFetched: boolean;
  organisations: OrganisationProps[];
  fetchCurrentUserOrganisations: () => void;
  moveToNextPage: Function;
}

export function MyOrganisations(props: MyOrganisationsProps): React.ReactElement<MyOrganisationsProps> {
  const {
    fetchCurrentUserOrganisations,
    organisations,
    isOrganisationPending,
    isOrganizationFetched,
    moveToNextPage,
  } = props;

  React.useEffect(function(): void {
    fetchCurrentUserOrganisations();
  }, []);

  if (isOrganisationPending) return <MyOrganisations.Message>...Loading</MyOrganisations.Message>;

  function navigateToPortal(orgId: string) {
    return function() {
      moveToNextPage(`/organisation/${orgId}/charts`);
    };
  }
  return (
    <MyOrganisations.Wrapper>
      {isOrganizationFetched && organisations.length ? (
        <>
          {organisations.map(org => (
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

const mapStateToProps = (
  state,
): Pick<MyOrganisationsProps, 'isOrganisationPending' | 'isOrganizationFetched' | 'organisations'> => ({
  organisations: state.dashboard.organisations,
  isOrganisationPending: state.dashboard.status.isOrganisationPending,
  isOrganizationFetched: state.dashboard.status.isOrganisationFetched,
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
