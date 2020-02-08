import * as React from 'react';
import { connect } from 'react-redux';
import { history } from 'store';
import styled from '@emotion/styled';

import OrganisationCard from 'components/ui/OrganisationCard';
import { fetchCurrentUserOrganisations } from 'store/actions/dashboard';
import { getDateJoinedMessage } from 'helpers/dateHelpers';

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
  organisations: OrganisationProps;
  fetchCurrentUserOrganisations: () => void;
}

export function MyOrganisations(props: MyOrganisationsProps): React.ReactElement<{}> {
  const { fetchCurrentUserOrganisations, organisations, isOrganisationPending, isOrganizationFetched } = props;

  React.useEffect(function(): void {
    fetchCurrentUserOrganisations();
  }, []);

  if (isOrganisationPending) {
    return <MyOrganisations.Message>...Loading</MyOrganisations.Message>;
  } else if (isOrganizationFetched) {
    const organisationsToDisplay = Object.values(organisations);
    if (organisationsToDisplay) {
      return (
        <MyOrganisations.Wrapper>
          {organisationsToDisplay.map(org => {
            return (
              <div key={org.organisation.id} onClick={() => history.push('/dashboard/profile', org)}>
                <OrganisationCard
                  img={org.organisation.logoUrl}
                  name={org.organisation.name}
                  role={org.role.name}
                  date={getDateJoinedMessage(org.organisation.createdAt)}
                />
              </div>
            );
          })}
        </MyOrganisations.Wrapper>
      );
    }
  }

  return <MyOrganisations.Message>Sorry! you do not belong to any organisation yet</MyOrganisations.Message>;
}

const mapStateToProps = (
  state,
): Pick<MyOrganisationsProps, 'isOrganisationPending' | 'isOrganizationFetched' | 'organisations'> => ({
  organisations: state.dashboard.organisations,
  isOrganisationPending: state.dashboard.status.isOrganisationPending,
  isOrganizationFetched: state.dashboard.status.isOrganisationFetched,
});

const mapDispatchToProps = (dispatch): Pick<MyOrganisationsProps, 'fetchCurrentUserOrganisations'> => ({
  fetchCurrentUserOrganisations: (): void => dispatch(fetchCurrentUserOrganisations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyOrganisations);

MyOrganisations.Wrapper = styled.section`
  padding: 0;
`;

MyOrganisations.Message = styled.p``;
