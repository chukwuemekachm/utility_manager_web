import * as React from 'react';
import styled from '@emotion/styled';

import Avatar from 'components/ui/Avatar';
import Icon from 'components/ui/Icon';
import __spacing from 'settings/__spacing';
import { fontSizes } from 'settings/__fonts';
import { DARK_GRAY } from 'settings/__color';

export interface UserProfileCardProps {
  imgUrl: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function UserProfileCard(props: UserProfileCardProps): React.ReactElement<UserProfileCardProps> {
  const { imgUrl, firstName, lastName, email } = props;
  const fullName = `${firstName} ${lastName}`;

  return (
    <UserProfileCard.Wrapper>
      <Avatar imgUrl={imgUrl} altText={fullName} />
      <UserProfileCard.TextAndIconWrapper>
        <UserProfileCard.TextWrapper>
          <UserProfileCard.FullName>{fullName}</UserProfileCard.FullName>
          <UserProfileCard.Email>{email}</UserProfileCard.Email>
        </UserProfileCard.TextWrapper>
        <UserProfileCard.IconWrapper>
          <Icon iconType="md-create" size="LARGE" />
        </UserProfileCard.IconWrapper>
      </UserProfileCard.TextAndIconWrapper>
    </UserProfileCard.Wrapper>
  );
}

UserProfileCard.Wrapper = styled.header`
  display: flex;
  padding: ${__spacing.normal};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
`;

UserProfileCard.TextAndIconWrapper = styled.div`
  margin-left: ${__spacing.medium};
  display: flex;
  flex-grow: 1;
`;

UserProfileCard.TextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

UserProfileCard.IconWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: ${__spacing.xSmall};
`;

UserProfileCard.FullName = styled.h1`
  margin: 0;
  font-size: ${fontSizes.medium};
`;

UserProfileCard.Email = styled.span`
  font-style: normal;
  font-size: ${fontSizes.small};
  margin-top: ${__spacing.xSmall};
  color: ${DARK_GRAY};
`;
