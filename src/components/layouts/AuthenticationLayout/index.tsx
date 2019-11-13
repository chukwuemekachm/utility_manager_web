import * as React from 'react';
import styled from '@emotion/styled';
import {__wrapper, __content, } from '../__authPage.css';

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
 ${__wrapper}
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
  ${__content}
  width:30vw;
`;
