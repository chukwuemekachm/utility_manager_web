import * as React from 'react';
import styled from '@emotion/styled';

import { BRAND_PRIMARY } from 'settings/__color';

interface OrgSideBarProps {
  children: React.ReactNode;
  active: boolean;
  onClick: React.EventHandler<React.SyntheticEvent>;
}
export function SideBarItem(props: OrgSideBarProps) {
  const { children, active = false, onClick } = props;
  return (
    <SideBarItem.Wrapper onClick={onClick} active={active}>
      {children}
    </SideBarItem.Wrapper>
  );
}
export default function OrganizationSideBar(props: Pick<OrgSideBarProps, 'children'>) {
  const { children } = props;
  return (
    <OrganizationSideBar.Wrapper>
      <ul>{children}</ul>
    </OrganizationSideBar.Wrapper>
  );
}

SideBarItem.Wrapper = styled.li<Pick<OrgSideBarProps, 'active'>>`
  padding: 1rem 0.3125rem;
  color: #fff;
  text-align: center;

  ${props =>
    props.active &&
    `
  background-color: #2976bb;
  border-left: 3px solid #fff;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  `}
  &:hover {
    background-color: #2976bb;
    cursor: pointer;
  }
`;

OrganizationSideBar.Wrapper = styled.aside`
  width: 5rem;
  height: 100%;
  background: ${BRAND_PRIMARY};
  position: fixed;
  ul {
    margin: 0;
    padding: 0;
  }
`;
