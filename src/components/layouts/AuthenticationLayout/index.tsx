import * as React from 'react';
import styled from '@emotion/styled';

import Logo from '../Logo';
import Footer from '../Footer';
import __spacing from 'settings/__spacing';
import __layouts from 'settings/__layouts';
import { fontSizes } from 'settings/__fonts';
import { BRAND_WHITE } from 'settings/__color';

const backGroundURL = 'https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

export default function AuthenticationLayout({ children }) {
  return (
    <AuthenticationLayout.Wrapper>
      <AuthenticationLayout.Content>
        <Logo />
        <main className="main-content">{children}</main>
        <Footer title="Sign Up" />
      </AuthenticationLayout.Content>
      <AuthenticationLayout.Overlay>
        <div className="overlay">
          <div className="overlay-content">
            <h3>Utility Manager Lorem Ipsum Dolet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          </div>
        </div>
      </AuthenticationLayout.Overlay>
    </AuthenticationLayout.Wrapper>
  );
}

AuthenticationLayout.Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

AuthenticationLayout.Overlay = styled.section`
  width: 70vw;
  height: 100vh;
  background: url(${backGroundURL});
  background-size: cover;

  .overlay {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .5);
  }

  .overlay-content {
    width: 60%;
    color: ${BRAND_WHITE};

    h3 {
      font-size: ${fontSizes.xxLarge};
      margin: ${__spacing.xSmall} 0;
    }

    p {
      margin: 0;
      line-height: ${fontSizes.large};
    }
  }

  @media (max-width: ${__layouts.xLg}) {
    display: none;
  }
`;

AuthenticationLayout.Content = styled.section`
  width: 30vw;
  height: 100vh;
  padding: ${__spacing.large};
  box-shadow: rgba(153, 153, 153, 0.1) 0px 0.32em 2em;

  main.main-content {
    height: calc(100vh - 135px);
    overflow-y: auto;
  }

  @media (max-width: ${__layouts.xLg}) {
    width: 100vw;

    main {
      height: auto;
    }
  }
`;
