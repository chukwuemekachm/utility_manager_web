import * as React from 'react';
import { Size } from 'components/ui/Icon';
import Avatar from 'components/ui/Avatar';
import styled from '@emotion/styled';
import { LIGHT_GRAY } from 'settings/__color';

interface CompProps {
  imgUrl: string;
  altText: string;
  name: string;
  time: string;
  size?: Size;
}
export default function AvatarWithInfo(props: CompProps) {
  const { imgUrl, altText, name, time, size = 'NORMAL' } = props;
  return (
    <AvatarWithInfo.Wrapper>
      <AvatarWithInfo.Content>
        <Avatar imgUrl={imgUrl} altText={altText} size={size}></Avatar>
      </AvatarWithInfo.Content>
      <AvatarWithInfo.Content className="text" css={{ marginLeft: '5%' }}>
        <span>
          <div className="name">{name}</div>
          <div className="time">{time}</div>
        </span>
      </AvatarWithInfo.Content>
    </AvatarWithInfo.Wrapper>
  );
}

AvatarWithInfo.Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  .text {
    margin-left: 5%;
  }
`;

AvatarWithInfo.Content = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin-left: 3%;
  }

  .name {
    margin-bottom: 2%;
    text-align: left;
  }

  .time {
    color: ${LIGHT_GRAY};
    text-align: left;
  }
`;
