import * as React from 'react';
import styled from '@emotion/styled';

import NavBar from 'components/ui/NavBar';
import HamBurgerMenu from 'components/ui/HamBurgerMenu';
import UserProfileCard from 'components/ui/UserProfileCard';
import DashBoardTitle from 'components/ui/DashBoardTitle';
import __spacing from 'settings/__spacing';
import { WHITE_SMOKE } from 'settings/__color';

export interface DashBoardLayoutProps {
  children: React.ReactNode;
  email: string;
  firstName: string;
  lastName: string;
  imageURL: string;
  pageTitle: string;
  hideNavMenu: () => void;
  callLogout: () => string;
  handleClick?: () => void;
}

const imgUrl =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80';

export default function DashBoardLayout(props: DashBoardLayoutProps): React.ReactElement<DashBoardLayoutProps> {
  const { children, email, firstName, lastName, imageURL, pageTitle, hideNavMenu, handleClick } = props;
  return (
    <DashBoardLayout.Wrapper>
      <DashBoardLayout.ProfileWrapper>
        <NavBar handleClick={handleClick} />
        <UserProfileCard email={email} firstName={firstName} lastName={lastName} imgUrl={imageURL || imgUrl} />
      </DashBoardLayout.ProfileWrapper>
      <DashBoardLayout.PageTitleWrapper>
        <DashBoardTitle>{pageTitle}</DashBoardTitle>
      </DashBoardLayout.PageTitleWrapper>
      <DashBoardLayout.PageWrapper>{children}</DashBoardLayout.PageWrapper>
    </DashBoardLayout.Wrapper>
  );
}

DashBoardLayout.Wrapper = styled.div`
  background-color: ${WHITE_SMOKE};
`;

DashBoardLayout.ProfileWrapper = styled.section``;

DashBoardLayout.PageTitleWrapper = styled.section`
  margin: ${__spacing.normal} 0;
`;

DashBoardLayout.PageWrapper = styled.main`
  overflow-y: auto;
`;
