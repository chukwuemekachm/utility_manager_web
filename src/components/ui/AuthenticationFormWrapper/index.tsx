import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import Tab, { TabItem } from 'components/ui/Tab';

export interface AuthenticationFormWrapperProps {
  showHeader?: boolean;
  children: React.ReactNode;
  handleTabChange?: Function;
}

export function AuthenticationFormWrapper(
  props: AuthenticationFormWrapperProps,
): React.ReactElement<AuthenticationFormWrapperProps> {
  const { showHeader = true, children, handleTabChange } = props;
  return (
    <AuthenticationFormWrapper.Wrapper>
      {showHeader && (
        <Tab onTabChange={handleTabChange}>
          {({ tab, setTab }) => (
            <>
              <TabItem setTab={setTab} itemValue={1} currentValue={tab}>
                Sign Up
              </TabItem>
              <TabItem setTab={setTab} itemValue={0} currentValue={tab}>
                Login
              </TabItem>
            </>
          )}
        </Tab>
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
