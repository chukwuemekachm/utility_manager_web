import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import __spacing from 'settings/__spacing';
import { fontSizes, fontWeights } from 'settings/__fonts';
import Logo from 'components/ui/Logo';
import { BRAND_WHITE, BLACK, BRAND_PRIMARY } from 'settings/__color';
import { hideNavigationMenu } from 'store/actions/navigation';
import { logout } from 'store/actions/auth';

interface HamBurgerMenuProps {
  shouldNavMenuShow: boolean;
  hideNavMenu: () => void;
  callLogout: () => void;
}

export function HamBurgerMenu({
  shouldNavMenuShow,
  hideNavMenu,
  callLogout,
}: HamBurgerMenuProps): React.ReactElement<{}> {
  const handleLogout = (): void => {
    callLogout();
    hideNavMenu();
  };

  function showActiveNav(pathname: string): void {
    switch (pathname) {
      case '/dashboard':
        HamBurgerMenu.Item = styled.p`
          #dashboard {
            color: ${BRAND_PRIMARY};
          }
        `;
        return;
      case '/dashboard/profile':
        HamBurgerMenu.Item = styled.p`
          #profile {
            color: ${BRAND_PRIMARY};
          }
        `;
        return;
      case '/dashboard/organisation':
        HamBurgerMenu.Item = styled.p`
          #organisation {
            color: ${BRAND_PRIMARY};
          }
        `;
        return;
      case '/dashboard/password':
        HamBurgerMenu.Item = styled.p`
          #password {
            color: ${BRAND_PRIMARY};
          }
        `;
        return;
    }
  }

  showActiveNav(window.location.pathname);

  return (
    <HamBurgerMenu.Wrapper>
      {shouldNavMenuShow && (
        <HamBurgerMenu.ContentWrapper>
          <HamBurgerMenu.CloseContainer>
            <i className="icon ion-ios-close" onClick={(): void => hideNavMenu()} />
          </HamBurgerMenu.CloseContainer>
          <HamBurgerMenu.Content>
            <HamBurgerMenu.Item onClick={(): void => hideNavMenu()}>
              {' '}
              <Link to="/dashboard" id="dashboard">
                {' '}
                Dashboard{' '}
              </Link>{' '}
            </HamBurgerMenu.Item>
            <HamBurgerMenu.Item onClick={(): void => hideNavMenu()}>
              {' '}
              <Link to="/dashboard/profile" id="profile">
                {' '}
                Update Profile{' '}
              </Link>
            </HamBurgerMenu.Item>
            <HamBurgerMenu.Item onClick={(): void => hideNavMenu()}>
              {' '}
              <Link to="/dashboard/organisation" id="organisation">
                Create New User Organization{' '}
              </Link>
            </HamBurgerMenu.Item>
            <HamBurgerMenu.Item onClick={(): void => hideNavMenu()}>
              {' '}
              <Link to="/dashboard/password" id="password">
                {' '}
                Update Password{' '}
              </Link>
            </HamBurgerMenu.Item>
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
  z-index: 1000;
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

HamBurgerMenu.Item = styled.p``;

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
});

const mapStateToProps = (state): Pick<HamBurgerMenuProps, 'shouldNavMenuShow'> => ({
  shouldNavMenuShow: state.navigation.navigation.showNavigationMenu,
});

export default connect(mapStateToProps, mapDispatchToProps)(HamBurgerMenu);
