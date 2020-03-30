import * as React from 'react';
import styled from '@emotion/styled';

import Icon from 'components/ui/Icon';
import Logo from 'components/ui/Logo';
import Avatar from 'components/ui/Avatar';
interface OrgHeaderProps {
  imgUrl: string;
}

export default function OrganizationHeader(props: OrgHeaderProps) {
  const { imgUrl } = props;
  return (
    <OrganizationHeader.Wrapper>
      <Logo hasText={false} />
      <ul>
        <li>
          <Icon iconType="md-notifications" size="LARGE" />
        </li>
        <li>
          <Avatar imgUrl={imgUrl} altText="Image" size="NORMAL" />
        </li>
      </ul>
    </OrganizationHeader.Wrapper>
  );
}

OrganizationHeader.Wrapper = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 1rem;

  ul {
    list-style-type: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    list-style: none;
  }

  ul li {
    margin: 0 0.5rem;
    list-style: none;
    text-decoration: none;
  }
`;
