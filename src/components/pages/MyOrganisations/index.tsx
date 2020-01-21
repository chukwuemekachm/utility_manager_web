import * as React from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';

export default function MyOrganisations(): React.ReactElement<{}> {
  return <MyOrganisations.Wrapper>My Organisations will go here.</MyOrganisations.Wrapper>;
}

MyOrganisations.Wrapper = styled.section`
  padding: 0 ${__spacing.small};
`;
