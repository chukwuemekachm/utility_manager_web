import * as React from 'react';
import styled from '@emotion/styled';

import Logo from '../../layouts/Logo';
import __spacing from 'settings/__spacing';
import __layouts from 'settings/__layouts';
import {__content, __wrapper} from '../../layouts/__authPage.css';
import NewPassword from "./NewPassword";

export default function ResetPasswordLayout() {
  return (
     <ResetPasswordLayout.Wrapper>
      <ResetPasswordLayout.Content>

        <Logo/>

        <main className="main-content">
            <NewPassword/>
        </main>
      </ResetPasswordLayout.Content>
    </ResetPasswordLayout.Wrapper>
  );
}

ResetPasswordLayout.Wrapper = styled.div`
  ${__wrapper}
`;


ResetPasswordLayout.Content = styled.section`
  ${__content}

  main.main-content {
  height: auto;
    margin-top: ${__spacing.xxLg};
    padding:  0 ${__spacing.xxxLg};
  }

  @media (max-width: ${__layouts.lg}) {
    main.main-content {
        padding:  0 ${__spacing.large};
    }
  }
  
  @media (max-height: 640px) {

    main.main-content {
         margin-top: 0
    }
  }
`;
