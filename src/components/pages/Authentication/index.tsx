import * as React from 'react';
import styled from '@emotion/styled';

import AuthenticationLayout from 'components/layouts/AuthenticationLayout';
import __spacing from 'settings/__spacing';
import { fontSizes } from 'settings/__fonts';
import { GRAY, BLACK, GAINS_BORO } from 'settings/__color';
import Login from './Login';
import SignUp from './SignUp';

const { useState } = React;

export default function Authentication() {
  const [display, setDisplay] = useState(1);

  function handleTabChange(tabNumber: number) {
    setDisplay(tabNumber);
  }

  return (
    <AuthenticationLayout>
      <Authentication.Wrapper>
        <Authentication.Header>
          <button
            className={display === 0 ? '__active' : ''}
            onClick={() => handleTabChange(0)}
          >
            Login
        </button>
          <span className="divider" />
          <button
            className={display === 1 ? '__active' : ''}
            onClick={() => handleTabChange(1)}
          >
            Sign Up
        </button>
        </Authentication.Header>
        <Authentication.Content>
          {
            !display
              ? <Login />
              : <SignUp />
          }
        </Authentication.Content>
      </Authentication.Wrapper>
    </AuthenticationLayout>
  );
}

Authentication.Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

Authentication.Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;

  .divider {
    width: 1px;
    background: ${GAINS_BORO};
  }

  button {
    border: none;
    border-bottom: 1px solid ${GAINS_BORO};
    width: calc(50% - 1px);
    padding: ${__spacing.normal} 0;
    font-size: ${fontSizes.small};
    color: ${GRAY};
    background: transparent;

    &.__active {
      color: ${BLACK};
    }

    &:hover {
      cursor: pointer;
      color: ${BLACK};
      background: rgba(0, 0, 0, .05);
    }

    &:focus {
      outline: none;
    }
  }
`;

Authentication.Content = styled.main`
  width: 100%;
`;
