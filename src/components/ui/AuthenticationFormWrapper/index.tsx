import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import __spacing from 'settings/__spacing';
import { fontSizes } from 'settings/__fonts';
import { GRAY, BLACK, GAINS_BORO } from 'settings/__color';

export interface AuthenticationFormWrapperProps {
  display?: number;
  showHeader?: boolean;
  children: React.ReactNode;
  handleTabChange?: (tabNumber: number) => React.EventHandler<React.SyntheticEvent>;
}

export function AuthenticationFormWrapper(
  props: AuthenticationFormWrapperProps,
): React.ReactElement<AuthenticationFormWrapperProps> {
  const {
    display,
    showHeader = true,
    children,
    handleTabChange = () => {
      return (() => null) as React.EventHandler<React.SyntheticEvent>;
    },
  } = props;

  return (
    <AuthenticationFormWrapper.Wrapper>
      {showHeader && (
        <AuthenticationFormWrapper.Header>
          <button className={display === 1 ? '__active' : ''} onClick={handleTabChange(1)}>
            Sign Up
          </button>
          <span className="divider" />
          <button className={display === 0 ? '__active' : ''} onClick={handleTabChange(0)}>
            Login
          </button>
        </AuthenticationFormWrapper.Header>
      )}
      <AuthenticationFormWrapper.Content>{children}</AuthenticationFormWrapper.Content>
    </AuthenticationFormWrapper.Wrapper>
  );
}

AuthenticationFormWrapper.Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-content: flex-start;
  padding-top: 4%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  /**
  /* scroll bar ideas gotten from
  /*  https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll
  */
`;

AuthenticationFormWrapper.Header = styled.header`
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
      background: rgba(0, 0, 0, 0.05);
    }

    &:focus {
      outline: none;
    }
  }
`;

AuthenticationFormWrapper.Content = styled.main`
  width: 100%;
  padding-top: 7%;
`;

const mapStateToProps = (state): { isLoading: boolean } => {
  return {
    isLoading: state.auth.status.isLoading,
  };
};

export default connect(mapStateToProps)(AuthenticationFormWrapper);
