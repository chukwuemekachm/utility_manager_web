import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import __spacing from 'settings/__spacing';
import { fontSizes, fontWeights } from 'settings/__fonts';
import Logo from 'components/ui/Logo';
import { BRAND_WHITE, BLACK, BRAND_PRIMARY } from 'settings/__color';
import { hideNavigationMenu } from 'store/actions/navigation';
import { logout } from 'store/actions/auth';
import { moveToNextPage } from 'store/actions/navigation';

interface HamBurgerMenuProps {
  shouldNavMenuShow: boolean;
  hideNavMenu: () => void;
  callLogout: () => void;
  moveToNextPage: (page: string) => void;
  active?: boolean;
}

export function HamBurgerMenu({
  shouldNavMenuShow,
  hideNavMenu,
  callLogout,
  moveToNextPage,
}: HamBurgerMenuProps): React.ReactElement<{}> {
  type ReturnType = {
    active: boolean;
    onClick: (e) => void;
  };

  const handleLogout = (): void => {
    callLogout();
    hideNavMenu();
  };

  function retrieveProps(itemRoute): ReturnType {
    const active = itemRoute == window.location.pathname;
    return {
      active,
      onClick: e => {
        !active && moveToNextPage(itemRoute);
        !active && hideNavMenu();
      },
    };
  }

  return (
    <HamBurgerMenu.Wrapper>
      {shouldNavMenuShow && (
        <HamBurgerMenu.ContentWrapper>
          <HamBurgerMenu.CloseContainer>
            <i className="icon ion-ios-close" onClick={(): void => hideNavMenu()} />
          </HamBurgerMenu.CloseContainer>
          <HamBurgerMenu.Content>
            <HamBurgerMenu.Item {...retrieveProps('/dashboard')}>Dashboard</HamBurgerMenu.Item>

            <HamBurgerMenu.Item {...retrieveProps('/dashboard/profile')}>Update Profile</HamBurgerMenu.Item>
            <HamBurgerMenu.Item {...retrieveProps('/dashboard/organisation')}>
              Create New User Organization
            </HamBurgerMenu.Item>
            <HamBurgerMenu.Item {...retrieveProps('/dashboard/password')}>Update Password</HamBurgerMenu.Item>
            <HamBurgerMenu.Item onClick={(): void => handleLogout()}> Logout </HamBurgerMenu.Item>
          </HamBurgerMenu.Content>
          <HamBurgerMenu.Footer>
            <HamBurgerMenu.LogoContainer>
              <Logo />
            </HamBurgerMenu.LogoContainer>
          </HamBurgerMenu.Footer>
        </HamBurgerMenu.ContentWrapper>
      )}
    </HamBurgerMenu.Wrapper>
  );
}

HamBurgerMenu.Wrapper = styled.div`
  position: Fixed;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 4;
`;

HamBurgerMenu.ContentWrapper = styled.div`
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: ${BRAND_WHITE};
  opacity: 1;
  transition: opacity 150ms ease-in;
  -webkit-transition: opacity 150ms ease-in;
  animation: slidein 1000ms ease-in-out forwards;
  -webkit-animation: slidein 1500ms ease-in-out forwards;

  @keyframes slidein {
    from {
      right: -${__spacing.xxxLg};
    }
    to {
      right: 0;
    }
  }
`;

HamBurgerMenu.CloseContainer = styled.div`
  text-align: right;
  font-size: ${fontSizes.xLarge};
  padding-right: ${__spacing.normal};
  padding-top: ${__spacing.medium};
`;

HamBurgerMenu.Content = styled.div`
  margin-top: 25%;
  p {
    cursor: pointer;
    font-weight: ${fontWeights.bold};
    a {
      color: ${BLACK};
      text-decoration: none;
    }
    a:active {
      color: blue;
    }
  }
`;

HamBurgerMenu.Item = styled.p<Pick<HamBurgerMenuProps, 'active'>>`
  ${props => props.active && `color: ${BRAND_PRIMARY}; `}
`;

HamBurgerMenu.Footer = styled.div`
  position: relative;
  top: 25%;
  padding: 0 auto;
`;

HamBurgerMenu.LogoContainer = styled.div`
  margin: 0 22%;
  text-align: center;
  font-size: ${fontSizes.medium};
`;

const mapDispatchToProps = dispatch => ({
  hideNavMenu: (): void => dispatch(hideNavigationMenu()),
  callLogout: (): string => dispatch(logout({ showNotification: true })),
  moveToNextPage: (nextPageRoute): void => dispatch(moveToNextPage({ nextPageRoute })),
});

const mapStateToProps = (state): Pick<HamBurgerMenuProps, 'shouldNavMenuShow'> => ({
  shouldNavMenuShow: state.navigation.navigation.showNavigationMenu,
});

export default connect(mapStateToProps, mapDispatchToProps)(HamBurgerMenu);
