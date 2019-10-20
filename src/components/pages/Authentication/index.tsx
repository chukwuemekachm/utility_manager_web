import * as React from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';
import { fontSizes } from 'settings/__fonts';
import { GRAY, BLACK } from 'settings/__color';

const { useState } = React;

export default function Authentication() {
  const [display, setDisplay] = useState(0);

  return (
    <Authentication.Wrapper>
      <Authentication.Header>
        <button>Sign Up</button>
        <span className="divider" />
        <button>Login</button>
      </Authentication.Header>
      <Authentication.Content>
      </Authentication.Content>
    </Authentication.Wrapper>
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
    background: ${GRAY};;
  }

  button {
    border: none;
    border-bottom: 1px solid ${GRAY};;
    width: calc(50% - 1px);
    padding: ${__spacing.normal} 0;
    font-size: ${fontSizes.small};
    color: ${GRAY};

    :hover {
      cursor: pointer;
      color: ${BLACK};
      background: rgba(0, 0, 0, .05);
    }

    :focus {
      outline: none;
    }
  }
`;

Authentication.Content = styled.main``;
